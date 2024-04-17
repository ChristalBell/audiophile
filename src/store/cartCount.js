import { createSlice } from "@reduxjs/toolkit";

export const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    minus: (state) => {
      state.cartCount -= 1;
    },
    add: (state) => {
      state.cartCount -= 1;
    },
  },
});

export const { minus, add } = cartCountSlice.actions;
export default cartCountSlice.reducer;
