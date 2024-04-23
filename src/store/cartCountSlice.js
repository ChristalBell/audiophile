import { createSlice } from "@reduxjs/toolkit";

export const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    addToCartCount: (state, action) => {
      state.cartCount += action.payload;
    },

    clearCartCount: (state) => {
      state.cartCount = 0;
    },
    raiseCartCount: (state) => {
      state.cartCount += 1;
    },

    lowerCartCount: (state) => {
      state.cartCount -= 1;
    },
  },
});

export const {
  addToCartCount,
  clearCartCount,
  raiseCartCount,
  lowerCartCount,
} = cartCountSlice.actions;
export default cartCountSlice.reducer;
