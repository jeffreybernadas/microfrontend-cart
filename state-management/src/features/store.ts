import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/product.slice";
import cartReducer from "./cart/cart.slice";
import checkoutReducer from "./checkout/checkout.slice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartReducer,
  checkout: checkoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = createStore();

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;
