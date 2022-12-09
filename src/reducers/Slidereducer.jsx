import { createSlice } from '@reduxjs/toolkit';

const SlideSlice = createSlice({
  name: 'slideY',
  initialState: {
    value: 0,
  },
  reducers: {
    prev: (state) => {
      state.value += 400;
    },
    next: (state) => {
      state.value -= 400;
    },
    prevEnd: (state, action) => {
      state.value += action.payload % 400;
    },
    nextEnd: (state, action) => {
      state.value -= action.payload % 400;
    },
  },
});
export const slideAction = SlideSlice.actions;
export const slideReducer = SlideSlice.reducer;
