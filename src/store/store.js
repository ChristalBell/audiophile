import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartItemReducer from "./cartItemSlice";
import totalPriceReducer from "./totalPriceSlice";

const reducers = combineReducers({
  cart: cartItemReducer,
  totalPrice: totalPriceReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export const persistedStore = persistStore(store);
