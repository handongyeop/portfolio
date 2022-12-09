import { configureStore } from '@reduxjs/toolkit';
import { modalReducer, readMeReducer } from './reducers/Modalreducer';
import { scrollReducer } from './reducers/Scrollreducer';
import { slideReducer } from './reducers/Slidereducer';

const store = configureStore({
  reducer: {
    scrollY: scrollReducer,
    modal: modalReducer,
    readMe: readMeReducer,
    slideY: slideReducer,
  },
});

export default store;
