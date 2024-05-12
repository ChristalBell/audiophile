import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartProduct: [
      { id: 0, price: 0, name: "", image: { mobile: "" }, itemCount: 0 },
    ],
  },

  reducers: {
    clearCartItems: (state) => {
      state.cartProduct = [
        {
          id: 0,
          price: 0,
          name: "",
          image: {
            mobile: "",
          },

          cartItemCount: 0,
        },
      ];
    },
    addCartItems: (state, action) => {
      state.cartProduct.push(action.payload);
    },
    removeCartItems: (state, action) => {
      state.cartProduct.splice(action.payload, 1);
    },
    startCartItems: (state) => {
      state.cartProduct.shift();
    },
    raiseCountCartItems: (state, action) => {
      state.cartProduct += action.payload;
    },
    lowerCountCartItems: (state, action) => {
      state.cartProduct -= action.payload;
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
