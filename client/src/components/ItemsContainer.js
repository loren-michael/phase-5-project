import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard'
import { Card } from 'semantic-ui-react';


const ItemsContainer = () => {
  // const items = useSelector(store => store.itemsReducer.items)
  // const {loggedIn, currentUser } = useSelector(store => store.sessions)
  const items = useSelector(store => store.items)

  console.log(items)

  return (
    <Card.Group centered cards>
    {/* // <div class="ui link cards centered"> */}
      {items.map(item => {
        return (
          <ItemCard item={item} key={item.id} />
        )
      })}

    {/* // </div> */}
    </Card.Group>
  )
}

export default ItemsContainer