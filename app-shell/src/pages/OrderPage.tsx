import React from "react";
import { useAppSelector, useAppDispatch } from "@state-management/rtk-hooks";
import { updateOrderStatus } from "@state-management/order-slice";
import type { RootState } from "@state-management/store";
import { IOrder } from "../types/order.type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@core/components/shadcn";
import { cn } from "@core/lib";

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state: RootState) => state.orders.orders);

  const handleMarkDelivered = (orderId: string) => {
    dispatch(updateOrderStatus({ orderId, status: "Delivered" }));
  };
  
  const defaultOpenOrderId = orders.length > 0 ? orders[0].orderId : undefined;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <Accordion 
          type="single" 
          collapsible 
          className="w-full space-y-4"
          defaultValue={defaultOpenOrderId}
        >
          {orders.map((order: IOrder) => (
            <AccordionItem value={order.orderId} key={order.orderId}>
              <AccordionTrigger className="flex justify-between items-center p-4 border rounded hover:bg-muted/50">
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">
                    Order ID: {order.orderId}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Placed on: {new Date(order.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-semibold">
                    ${order.totalPrice.toFixed(2)}
                  </span>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded",
                      {
                        "bg-yellow-100 text-yellow-800": order.status === "Pending",
                        "bg-blue-100 text-blue-800": order.status === "Shipped",
                        "bg-green-100 text-green-800": order.status === "Delivered",
                      }
                    )}
                  >
                    {order.status}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 border border-t-0 rounded-b">
                <h4 className="text-lg font-semibold mb-3">Order Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Items:</h5>
                    <ul className="space-y-2 text-sm">
                      {order.items.map((item) => (
                        <li
                          key={item.productId}
                          className="flex items-center space-x-3"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-10 w-10 object-contain rounded border"
                          />
                          <div className="flex-grow">
                            <p>{item.product.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-1">Shipping Address:</h5>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {order.userInfo.address}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Order Status:</h5>
                      <p className="text-sm text-muted-foreground">
                        {order.status}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Payment Status:</h5>
                      <p className="text-sm text-muted-foreground">
                        Paid (Cash on Delivery)
                      </p>
                    </div>
                    {order.status !== "Delivered" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMarkDelivered(order.orderId)}
                      >
                        Mark as Delivered
                      </Button>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default OrderPage;
