import { configureStore } from '@reduxjs/toolkit';
import appReducer from './AppSlice';

const store = configureStore({
  reducer: {
    appSlice: appReducer,
  },
});

export default store;
