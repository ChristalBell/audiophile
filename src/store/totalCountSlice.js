import { createSlice } from "@reduxjs/toolkit";

export const totalCountSlice = createSlice({
  name: "totalCount",
  initialState: {
    totalCount: 0,
  },
  reducers: {
    changeTotalCount: (state, action) => {
      state.totalCount += action.payload;
    },
  },
});

export const { changeTotalCount } = totalCountSlice.actions;
export default totalCountSlice.reducer;
