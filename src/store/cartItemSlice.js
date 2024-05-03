import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [{ name: "", image: "", price: 0 }],
  },
  reducers: {
    clearCartItems: (state) => {
      state.cartItems = { name: "", image: "", price: 0 };
    },
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItems: (state, action) => {
      state.cartItems.splice(action.payload, 1);
    },
    startCartItems: (state, action) => {
      state.cartItems.shift(action.payload);
    },
  },
});
export const { clearCartItems, addCartItems, removeItems, startCartItems } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
