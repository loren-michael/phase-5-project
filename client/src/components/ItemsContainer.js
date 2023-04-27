import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard'


const ItemsContainer = () => {
  // const items = useSelector(store => store.itemsReducer.items)
  // const {loggedIn, currentUser } = useSelector(store => store.sessions)
  const items = useSelector(store => store.items)

  console.log(items)

  return (
    <div>
      {items.map(item => {
        return (
          <ItemCard item={item} key={item.id} />
        )
      })}
    </div>
  )
}

export default ItemsContainer