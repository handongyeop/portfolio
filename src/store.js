import { configureStore } from '@reduxjs/toolkit';
import { scrollReducer } from './reducers/Scrollreducer';

const store = configureStore({
  reducer: {
    scrollY: scrollReducer,
  },
});

export default store;
