import React, { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "@state-management/rtk-hooks";
import { clearCart } from "@state-management/cart-slice";
import { decrementProductQuantity } from "@state-management/product-slice";
import {
  updateUserInfo,
  clearUserInfo,
} from "@state-management/checkout-slice";
import { addOrder } from "@state-management/order-slice";
import type { RootState } from "@state-management/store";
import { useNavigate } from "react-router";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
  RadioGroup,
  RadioGroupItem,
} from "@core/components/shadcn";
import { useCartCalculations } from "@cart/useCartCalculations";
import { IOrder, IOrderItem } from "../types/order.type";
import type { ICartItem } from "../types/cart.type";
import type { IProduct } from "../types/product.type";

import "../index.css";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // --- Select State ---
  const userInfo = useAppSelector(
    (state: RootState) => state.checkout.userInfo
  );
  const { itemsWithDetails, totalPrice } = useCartCalculations();

  // --- Handlers ---
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateUserInfo({ [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (itemsWithDetails.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!userInfo.name || !userInfo.email || !userInfo.address) {
      alert("Please fill in all user information fields.");
      return;
    }

    const newOrder: IOrder = {
      orderId: `ORD-${Date.now()}`,
      timestamp: Date.now(),
      status: "Pending",
      totalPrice: totalPrice,
      userInfo: { ...userInfo },
      items: itemsWithDetails.map(
        (item: ICartItem & { product: IProduct }): IOrderItem => ({
          productId: item.productId,
          quantity: item.quantity,
          product: {
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            image: item.product.image,
          },
        })
      ),
    };

    dispatch(addOrder(newOrder));

    itemsWithDetails.forEach((item: ICartItem & { product: IProduct }) => {
      dispatch(
        decrementProductQuantity({
          productId: item.productId,
          quantity: item.quantity,
        })
      );
    });

    dispatch(clearCart());
    dispatch(clearUserInfo());

    navigate("/order");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={userInfo.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="address">Delivery Address</Label>
              <Textarea
                id="address"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Total: ${totalPrice.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              {itemsWithDetails.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className="space-y-3 max-h-60 overflow-y-auto">
                  {itemsWithDetails.map((item: ICartItem & { product: IProduct }) => (
                    <li
                      key={item.productId}
                      className="flex justify-between items-center border-b pb-2 pr-2"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-12 w-12 object-contain mr-3 flex-shrink-0"
                      />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm ml-3 flex-shrink-0">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="cod" className="space-y-1">
                <div className="flex items-center space-x-3 space-y-0">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="font-normal">
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Button
            className="w-full"
            onClick={handlePlaceOrder}
            disabled={
              itemsWithDetails.length === 0 ||
              !userInfo.name ||
              !userInfo.email ||
              !userInfo.address
            }
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
