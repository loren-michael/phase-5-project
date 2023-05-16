import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../reducers/itemsReducer';
import usersReducer from '../reducers/usersReducer';
import sessionsReducer from '../reducers/sessionsReducer';
import cartsReducer from '../reducers/cartsReducer';
import ordersReducer from '../reducers/ordersReducer';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: usersReducer,
    session: sessionsReducer,
    carts: cartsReducer,
    orders: ordersReducer
  },
})