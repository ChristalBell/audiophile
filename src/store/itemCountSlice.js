import { createSlice } from "@reduxjs/toolkit";

export const itemCountSlice = createSlice({
  name: "itemCount",
  initialState: {
    itemCount: 0,
  },
  reducers: {
    clearItemCount: (state) => {
      state.itemCount = 0;
    },
    minusOne: (state) => {
      state.itemCount -= 1;
    },
    addOne: (state) => {
      state.itemCount += 1;
    },
    raiseItemCount: (state, action) => {
      state.itemCount += action.payload;
    },
  },
});

export const { minusOne, addOne, clearItemCount, raiseItemCount } =
  itemCountSlice.actions;
export default itemCountSlice.reducer;
