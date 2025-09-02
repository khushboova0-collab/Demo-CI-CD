import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './formsSlice';

export const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});

export default store;