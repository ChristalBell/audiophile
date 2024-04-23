import { createSlice } from "@reduxjs/toolkit";

export const totalCountSlice = createSlice({
  name: "totalCount",
  initialState: {
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    createTotalCount: (state, action) => {
      state.totalCount += action.payload;
    },
    // createTotalPrice: (state) => {
    //   state.totalPrice * {item}
    // }
  },
});

export const { createTotalCount } = totalCountSlice.actions;
export default totalCountSlice.reducer;
