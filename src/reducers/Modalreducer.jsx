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

const ReadMeSlice = createSlice({
  name: 'readMe',
  initialState: {
    value: ``,
  },
  reducers: {
    setReadMe: (state, action) => {
      state.value = action.payload.readMe;
    },
  },
});
export const readMeAction = ReadMeSlice.actions;
export const readMeReducer = ReadMeSlice.reducer;
