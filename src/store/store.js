import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartItemSlice from "./cartItemSlice";
import totalPriceSlice from "./totalPriceSlice";
import globalCountSlice from "./globalCountSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartItemReducer = persistReducer(persistConfig, cartItemSlice);
const persistedTotalPriceReducer = persistReducer(
  persistConfig,
  totalPriceSlice
);
const persistedGlobalCountReducer = persistReducer(
  persistConfig,
  globalCountSlice
);
export const store = configureStore({
  reducer: {
    cartItems: persistedCartItemReducer,
    totalPrice: persistedTotalPriceReducer,
    globalCount: persistedGlobalCountReducer,
  },
});

export const persistedStore = persistStore(store);
