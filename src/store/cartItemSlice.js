import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [
      {
        item: {
          cartItemCount: 0,
          price: 0,
          name: "",
          image: {
            mobile: "",
          },
        },
      },
    ],
  },
  reducers: {
    clearCartItems: (state) => {
      state.cartItems = {
        item: { name: "", image: { mobile: "" }, price: 0 },
        cartItemCount: 0,
      };
    },
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItems: (state, action) => {
      state.cartItems.splice(action.payload, 1);
    },
    startCartItems: (state) => {
      state.cartItems.shift();
    },
  },
});
export const { clearCartItems, addCartItems, removeItems, startCartItems } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
