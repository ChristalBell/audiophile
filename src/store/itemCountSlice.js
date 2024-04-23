import { createSlice } from "@reduxjs/toolkit";

export const itemCountSlice = createSlice({
  name: "itemCount",
  initialState: {
    itemCount: 0,
  },
  reducers: {
    minusOne: (state) => {
      state.itemCount -= 1;
    },
    addOne: (state) => {
      state.itemCount += 1;
    },
  },
});

export const { minusOne, addOne } = itemCountSlice.actions;
export default itemCountSlice.reducer;
