import React from 'react'
import NavBar from './NavBar'
import itemsReducer from '../reducers/itemsReducer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {
  const params = useParams()
  const itemId = params.id
  const items = useSelector(store => store.items.itemId)
  console.log(items)
  // const item = items.filter(item => item.id === itemId)

  // console.log(item)

  return (
    <div>
      <NavBar />
      <div>
        {/* <img src={item.image} /> */}
      </div>
    </div>
  )
}

export default ItemDetails