import { createSlice } from '@reduxjs/toolkit';

const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.value = !state.value;
    },
  },
});
export const modalAction = ModalSlice.actions;
export const modalReducer = ModalSlice.reducer;
