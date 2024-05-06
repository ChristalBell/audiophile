import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [
      {
        cartItemCount: 0,
        item: {
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
    raiseCountCartItems: (state, action) => {
      state.cartItemCount += action.payload;
    },
    lowerCountCartItems: (state, action) => {
      state.cartItemCount -= action.payload;
    },
  },
});
export const {
  clearCartItems,
  addCartItems,
  removeCartItems,
  startCartItems,
  raiseCountCartItems,
  lowerCountCartItems,
} = cartItemSlice.actions;
export default cartItemSlice.reducer;
