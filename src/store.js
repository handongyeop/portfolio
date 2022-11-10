import { configureStore } from '@reduxjs/toolkit';
import { floatReducer } from './redux/FloatReducer';

const store = configureStore({
  reducer: {
    float: floatReducer,
  },
});

export default store;
