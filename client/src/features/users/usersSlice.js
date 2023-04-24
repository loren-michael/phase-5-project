import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // this is where we name actions
    // create item
      create_user: {

      },
    // delete item
      delete_user: {

      },
    // update item
      update_user: {

      }
  }

})

export const { create_user, delete_user, update_user } = usersSlice.actions;

export const  selectAllUsers = (state) => state.users

export default usersSlice.reducer;