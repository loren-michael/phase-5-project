import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadItem } from '../actions/items';
import { addItemToCart } from '../actions/carts';


const ItemDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const itemId = params.id;
  // const store = useSelector(store => store)
  const items = useSelector(store => store.items);
  const displayItem = useSelector(store => store.items.displayItem)
  const [loading, setLoading] = useState(true)
  // const [displayItem, setDisplayItem] = useState({})
  const loggedIn = useSelector(store => store.sessions.loggedIn)
  // console.log(loggedIn)

  
  useEffect(() => {
    dispatch(loadItem(itemId))
    if (displayItem) {
      setLoading(false)
      // console.log(displayItem)
    }
  }, [])

  function handleAddCart() {
    console.log(displayItem)
    dispatch(addItemToCart(displayItem))
  }

// console.log(displayItem)
  return (
    <div>
      <NavBar />
      {loading ? 
        <div class="p-9">Item details loading...</div>
      :
        <div class="columns-2">
          <div>
            <div class="max-w-2/4 p-2 font-sans text-2xl font-semibold text-center">
              {displayItem.title}
            </div>
            <div class="max-w-2/4 h-96">
              <img class="m-auto max-h-96 object-scale-down" src={displayItem.image} alt={displayItem.title}></img>
            </div>
          </div>
          <div class="max-w-2/4 p-2 font-sans text-lg">
            <div class="font-semibold p-5">
              More Details:
            </div>
            <div class="font-sans h-48 text-lg">
              {displayItem.description}
              <br></br>
              <br></br>
              {/* Seller: {displayItem.user.username} */}
              <br></br>
              <br></br>
              ${displayItem.price}
            </div>
            <div>
              { loggedIn ?
                <button onClick={handleAddCart} class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">Add To Cart</button>
                :
                <Link href="/login" to="/login" class="font-sans bg-black font-semibold hover:text-white py-2 px-4 border border-black rounded">Log in to purchase</Link>
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ItemDetails