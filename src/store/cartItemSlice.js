import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: [
    {
      itemCount: 0,
      item: { id: 0, price: 0, name: "", image: { mobile: "" } },
    },
  ],

  reducers: {
    clearCartItems: (state) => {
      state.cartItems = [
        {
          itemCount: 0,
          item: { id: 0, price: 0, name: "", image: { mobile: "" } },
        },
      ];
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
      state.cartItems += action.payload;
    },
    lowerCountCartItems: (state, action) => {
      state.cartItems -= action.payload;
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
