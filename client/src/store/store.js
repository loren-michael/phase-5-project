import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../reducers/itemsReducer';

export const store = configureStore({
  reducer: {
    items: itemsReducer
  },
})