import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../reducers/itemsReducer';
import usersReducer from '../reducers/usersReducer';
import sessionsReducer from '../reducers/sessionsReducer'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: usersReducer,
    session: sessionsReducer
  },
})