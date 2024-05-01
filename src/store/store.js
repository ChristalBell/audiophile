import { configureStore } from "@reduxjs/toolkit";
import itemCountReducer from "./itemCountSlice";
import cartItemReducer from "./cartItemSlice";
export const store = configureStore({
  reducer: {
    itemCount: itemCountReducer,
    cartItems: cartItemReducer,
  },
});
