import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartItemSlice from "./cartItemSlice";
import totalPriceSlice from "./totalPriceSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartItemReducer = persistReducer(persistConfig, cartItemSlice);
const persistedTotalPriceReducer = persistReducer(
  persistConfig,
  totalPriceSlice
);
export const store = configureStore({
  reducer: {
    cartItems: persistedCartItemReducer,
    totalPrice: persistedTotalPriceReducer,
  },
});

export const persistedStore = persistStore(store);
