import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // this is where we name actions
    // create item
      create_item: {

      },
    // delete item
      delete_item: {

      },
    // update item
      update_item: {

      }
  }

})

export const { create_item, delete_item, update_item } = itemsSlice.actions;

export default itemsSlice.reducer;