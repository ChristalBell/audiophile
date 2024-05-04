import { configureStore } from "@reduxjs/toolkit";
import itemCountReducer from "./itemCountSlice";
import cartItemReducer from "./cartItemSlice";
import totalPriceReducer from "./totalPriceSlice";
export const store = configureStore({
  reducer: {
    itemCount: itemCountReducer,
    cartItems: cartItemReducer,
    totalPrice: totalPriceReducer,
  },
});
