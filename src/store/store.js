import { configureStore } from "@reduxjs/toolkit";
import itemCountReducer from "./itemCountSlice";
export const store = configureStore({
  reducer: {
    itemCount: itemCountReducer,
  },
});
