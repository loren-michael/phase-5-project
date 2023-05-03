import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadItem } from '../actions/items'



const ItemDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const itemId = params.id;
  // const store = useSelector(store => store)
  const items = useSelector(store => store.items);
  const [loading, setLoading] = useState(true)
  const [displayItem, setDisplayItem] = useState({})
  
  
  useEffect(() => {
    dispatch(loadItem(itemId))
    if (items) {
      setLoading(false)
    }
  }, [])
  
  // console.log(items)

  return (
    <div>
      <NavBar />

      {loading ? 
        <div class="p-9">Item details loading...</div>
      :
        <div>
          <div class="w-2/4 p-2 font-sans text-2xl font-semibold text-center">
            {items.title}
          </div>
          <div class="w-2/4 h-96">
            <img class="max-h-96 object-scale-down" src={items.image} alt={items.title}></img>
          </div>
        </div>
      }
    </div>
  )
}

export default ItemDetails