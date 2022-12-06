import { createSlice } from '@reduxjs/toolkit';

const ScrollSlice = createSlice({
  name: 'scrollY',
  initialState: {
    value: 0,
  },
  reducers: {
    setScrollY: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const scrollAction = ScrollSlice.actions;
export const scrollReducer = ScrollSlice.reducer;
