import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import itemCountSlice from "./itemCountSlice";
import cartItemSlice from "./cartItemSlice";
import totalPriceSlice from "./totalPriceSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persisteditemCountReducer = persistReducer(persistConfig, itemCountSlice);
const persistedcartItemReducer = persistReducer(persistConfig, cartItemSlice);
const persistedtotalPriceReducer = persistReducer(
  persistConfig,
  totalPriceSlice
);

export const store = configureStore({
  reducer: {
    itemCount: persisteditemCountReducer,
    cartItems: persistedcartItemReducer,
    totalPrice: persistedtotalPriceReducer,
  },
});

export const persistedStore = persistStore(store);
