import { configureStore } from "@reduxjs/toolkit";
import itemCountReducer from "./itemCountSlice";
import cartCountReducer from "./cartCountSlice";
import totalCountReducer from "./totalCountSlice";
export const store = configureStore({
  reducer: {
    itemCount: itemCountReducer,
    cartCount: cartCountReducer,
    totalCount: totalCountReducer,
  },
});
