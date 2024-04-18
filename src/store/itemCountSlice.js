import { createSlice } from "@reduxjs/toolkit";

export const itemCountSlice = createSlice({
  name: "itemCount",
  initialState: {
    itemCount: 0,
  },
  reducers: {
    minus: (state) => {
      state.itemCount -= 1;
    },
    add: (state) => {
      state.itemCount += 1;
    },
  },
});

export const { minus, add } = itemCountSlice.actions;
export default itemCountSlice.reducer;
