import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: { item: { name: "", image: "" } },
  },
  reducers: {
    clearItems: (state) =>
      (state.cartItems = { item: { name: "", image: "" } }),
  },
});
export const { clearItems, addItems, removeItems } = cartItemSlice.actions;
export default cartItemSlice.reducer;
