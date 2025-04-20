import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IUserInfo } from "../checkout/checkout.slice";
import type { IProduct } from "../products/product.slice";
import type { ICartItem } from "../cart/cart.slice";

export interface IOrderItem extends ICartItem {
  product: Pick<IProduct, "id" | "name" | "price" | "image">;
}

export interface IOrder {
  orderId: string;
  timestamp: number;
  status: "Pending" | "Shipped" | "Delivered";
  totalPrice: number;
  userInfo: IUserInfo;
  items: IOrderItem[];
}

interface OrdersState {
  orders: IOrder[];
}

const initialState: OrdersState = {
  orders: [],
};

// Define the payload shape for updating status
interface UpdateStatusPayload {
  orderId: IOrder["orderId"];
  status: IOrder["status"];
}

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.orders.unshift(action.payload);
    },
    // Reducer to update the status of a specific order
    updateOrderStatus: (state, action: PayloadAction<UpdateStatusPayload>) => {
      const { orderId, status } = action.payload;
      const orderIndex = state.orders.findIndex(order => order.orderId === orderId);
      if (orderIndex !== -1) {
        state.orders[orderIndex].status = status;
      }
    },
  },
});

export const { addOrder, updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
