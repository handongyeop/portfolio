import { createSlice } from '@reduxjs/toolkit';

const SlideSlice = createSlice({
  name: 'slideY',
  initialState: {
    value: [0, 0, 0, 0],
  },
  reducers: {
    prev: (state, action) => {
      state.value[action.payload] += 400;
    },
    next: (state, action) => {
      state.value[action.payload] -= 400;
    },
    prevEnd: (state, action) => {
      state.value[action.payload.idx] += action.payload.imageH % 400;
    },
    nextEnd: (state, action) => {
      state.value[action.payload.idx] -= action.payload.imageH % 400;
    },
  },
});
export const slideAction = SlideSlice.actions;
export const slideReducer = SlideSlice.reducer;
