import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../reducers/itemsReducer';
import usersReducer from '../reducers/usersReducer';

export default configureStore({
  reducer: {
    items: itemsReducer,
    users: usersReducer
  },
})