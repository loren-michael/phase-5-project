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
      <div>
        <br></br>
          {/* Add filter buttons here */}
        <br></br>
      </div>
      <div class="ui cards centered">
      
        {items.map(item => {
          return (
            <ItemCard item={item} key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default ItemsContainer