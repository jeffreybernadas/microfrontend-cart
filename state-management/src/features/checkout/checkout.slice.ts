import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserInfo {
  name: string;
  email: string;
  address: string;
}

interface CheckoutState {
  userInfo: IUserInfo;
}

const initialState: CheckoutState = {
  userInfo: {
    name: "",
    email: "",
    address: "",
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<Partial<IUserInfo>>) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    clearUserInfo: (state) => {
      state.userInfo = initialState.userInfo;
    },
  },
});

export const { updateUserInfo, clearUserInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;
