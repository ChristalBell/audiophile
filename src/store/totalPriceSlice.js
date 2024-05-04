import { creatSlice, createSlice } from "@reduxjs/toolkit";

export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    raiseTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    lowerTotalPrice: (state, action) => {
      state.totalPrice -= action.payload;
    },
    clearTotalPrice: (state) => {
      state.totalPrice = 0;
    },
  },
});

export const { raiseTotalPrice, lowerTotalPrice, clearTotalPrice } =
  totalPriceSlice.actions;
export default totalPriceSlice.reducer;
