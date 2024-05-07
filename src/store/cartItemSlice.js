import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [
      {
        cartItem: {
          price: 0,
          name: "",
          image: {
            mobile: "",
          },
        },
        cartItemCount: 0,
      },
    ],
  },
  reducers: {
    clearCartItems: (state) => {
      state.cartItems = {
        cartItem: { name: "", image: { mobile: "" }, price: 0 },
        cartItemCount: 0,
      };
    },
    addCartItems: (state, action) => {
      state.cartItemDetails.push(action.payload);
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
