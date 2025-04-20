import { useAppDispatch } from "@state-management/rtk-hooks";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
} from "@state-management/cart-slice";
import { useNavigate } from "react-router";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@core/components/shadcn";
import { useCartCalculations } from "../hooks/useCartCalculations";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { itemsWithDetails, totalPrice } = useCartCalculations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {itemsWithDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center">Stock</TableHead>
                <TableHead className="text-center">Total</TableHead>
                <TableHead className="text-center">Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {itemsWithDetails.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 object-contain"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.product.name}
                  </TableCell>
                  <TableCell className="text-center">
                    ${item.product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          dispatch(decrementItemQuantity(item.productId))
                        }
                        className="h-6 w-6"
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          if (item.quantity < item.product.availableQuantity) {
                            dispatch(incrementItemQuantity(item.productId));
                          }
                        }}
                        className="h-6 w-6"
                        disabled={
                          item.quantity >= item.product.availableQuantity
                        }
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {item.product.availableQuantity}
                  </TableCell>
                  <TableCell className="text-center">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        dispatch(removeItemFromCart(item.productId))
                      }
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 flex justify-end items-center">
            <span className="text-xl font-bold mr-4">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <Button onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
