import { createSlice } from '@reduxjs/toolkit';

const FloatSlice = createSlice({
  name: 'float',
  initialState: {
    value: 0,
  },
  reducers: {
    float: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const floatAction = FloatSlice.actions;
export const floatReducer = FloatSlice.reducer;
