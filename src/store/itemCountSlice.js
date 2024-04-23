import { createSlice } from "@reduxjs/toolkit";

export const itemCountSlice = createSlice({
  name: "itemCount",
  initialState: {
    itemCount: 0,
  },
  reducers: {
    clearItem: (state) => {
      state.itemCount = 0;
    },
    minusOne: (state) => {
      state.itemCount -= 1;
    },
    addOne: (state) => {
      state.itemCount += 1;
    },
  },
});

export const { minusOne, addOne, clearItem } = itemCountSlice.actions;
export default itemCountSlice.reducer;
