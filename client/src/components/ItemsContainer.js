import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard'

const ItemsContainer = () => {
  const items = useSelector(store => store.itemsReducer.items)

  console.log(items)

  return (
    <div>
      {items.map(item => {
        return (
          <ItemCard item={item} />
        )
      })}
    </div>
  )
}

export default ItemsContainer