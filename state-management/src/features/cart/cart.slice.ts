import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../products/product.slice";

export interface ICartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IProduct["id"]>) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ productId, quantity: 1 });
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<ICartItem["productId"]>
    ) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    incrementItemQuantity: (
      state,
      action: PayloadAction<ICartItem["productId"]>
    ) => {
      const item = state.items.find(
        (item) => item.productId === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementItemQuantity: (
      state,
      action: PayloadAction<ICartItem["productId"]>
    ) => {
      const item = state.items.find(
        (item) => item.productId === action.payload
      );
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items = state.items.filter(
            (i) => i.productId !== action.payload
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
