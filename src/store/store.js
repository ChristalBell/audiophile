import { configureStore } from "@reduxjs/toolkit";
import itemCountReducer from "./itemCountSlice";
import cartCountReducer from "./cartCountSlice";

export const store = configureStore({
  reducer: {
    itemCount: itemCountReducer,
    cartCount: cartCountReducer,
  },
});
