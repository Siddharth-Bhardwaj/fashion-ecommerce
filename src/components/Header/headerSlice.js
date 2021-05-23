import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: 0,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    increment: (state) => {
      state.items += 1;
    },
    decrement: (state) => {
      state.items -= 1;
    },
    incrementByAmount: (state, action) => {
      state.items += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = headerSlice.actions;

export const selectCount = (state) => state.header.items;

export default headerSlice.reducer;
