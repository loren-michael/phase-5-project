import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { create_item, delete_item, update_item } from '.itemsSlice';

const Items = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <div></div>
  )
}

export default Items