import { createSlice } from "@reduxjs/toolkit";

export const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    clearCart: (state) => {
      state.cartCount = 0;
    },
    addCartCount: (state) => {
      state.cartCount += 1;
    },

    minusCartCount: (state) => {
      state.cartCount -= 1;
    },
  },
});

export const { clearCart, addCartCount, minusCartCount } =
  cartCountSlice.actions;
export default cartCountSlice.reducer;
