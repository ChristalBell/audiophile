import { createSlice } from "@reduxjs/toolkit";

export const globalCountSlice = createSlice({
  name: "globalCount",
  initialState: {
    globalCount: 0,
  },
  reducers: {
    clearGlobalCount: (state) => {
      state.globalCount = 0;
    },
    minusOne: (state) => {
      state.globalCount -= 1;
    },
    addOne: (state) => {
      state.globalCount += 1;
    },
    raiseGlobalCount: (state, action) => {
      state.globalCount += action.payload;
    },
  },
});

export const { minusOne, addOne, clearGlobalCount, raiseGlobalCount } =
  globalCountSlice.actions;
export default globalCountSlice.reducer;
