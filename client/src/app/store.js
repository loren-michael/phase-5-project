import { configureStore } from '@reduxjs/toolkit';
// import itemsReducer from '../reducers/itemsReducer';
// import usersReducer from '../reducers/usersReducer';
import itemsReducer from '../features/items/itemsSlice';
import userReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: userReducer
  },
})