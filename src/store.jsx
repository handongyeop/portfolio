import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './reducers/Modalreducer';
import { scrollReducer } from './reducers/Scrollreducer';

const store = configureStore({
  reducer: {
    scrollY: scrollReducer,
    modal: modalReducer,
  },
});

export default store;
