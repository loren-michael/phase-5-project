import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard'
import FilterMenu from './FilterMenu';

const ItemsContainer = () => {
  // const items = useSelector(store => store.itemsReducer.items)
  // const {loggedIn, currentUser } = useSelector(store => store.sessions)
  const [filterCategory, setFilterCategory] = useState("All")
  const items = useSelector(store => store.items)

  const [displayItems, setDisplayItems] = useState(items)

  // useEffect(() => {
  //   if (filterCategory === "All") {
  //     setDisplayItems(items)
  //   } else {
  //     const categoryItems = items.filter(item => item.category === filterCategory)
  //     setDisplayItems(categoryItems)
  //   }
  // }, [displayItems])

  const filterItems = items.filter(item => item.category == filterCategory)

  console.log(filterItems)

  return (
    <div>
      <div>
        <FilterMenu setFilterCategory={setFilterCategory} />
        <br></br>
      </div>
      <div class="ui cards centered">
      
        {displayItems.map(item => {
          return (
            <ItemCard item={item} key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default ItemsContainer