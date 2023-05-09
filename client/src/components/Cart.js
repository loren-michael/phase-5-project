import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { loadCarts } from '../actions/carts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const dispatch = useDispatch()
  const carts = useSelector(store => store.carts)



  useEffect(() => {
    dispatch(loadCarts())
  }, [])

  function handleSaveCart () {
    console.log("save cart")
    // 1. make active cart inactive
    // 2. create new cart (always have an active cart, no matter what)
  }

  function handleActivateCart () {
    console.log("activate cart")
    // 1. make currently active cart inactive
    // 2. make selected cart active
  }

  function handleEmptyCart () {
    console.log("empty cart")
    // destroy this cart's associated cart items
  }

  function handleCheckOut () {
    console.log("check out")
    // 1. post this cart to "orders"
    // 2. delete the cart
    // 3. create a new active cart for the use (always have an active cart, no matter what)
  }


  return (
    <div>
      <NavBar />
      <div>
        <h3 class="pl-20">Your Carts:</h3>
        {carts.carts.map(cart => {
          return (
            <div key={cart.id} class="flex flex-wrap w-9/12 m-auto bg-slate-200 rounded border-2 border-black columns-auto">
              <div class="w-24">
                  {cart.active ? 
                    <div class="m-8"><FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#00ff00",}} /></div> 
                  : 
                    <div class="m-8"><FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#ff0000",}} /></div>
                  }
              </div>
              <div class="pl-6 w-2/4">Items:
                {cart.items.map(item => {
                  return (
                    <div class="flex flex-wrap">
                      <li>{item.title.substring(0,20)}</li>
                      <div class="pl-12"> ${item.price}</div>
                    </div>
                  )
                })}
              </div>
              <div>
                {cart.cart_total}
              </div>
              <div class="relative h-32 w-32">
                <div class="">
                  
                  {
                    cart.active ?
                    <button onClick={handleSaveCart} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Save Cart</button>
                    :
                    <button onClick={handleActivateCart} class=" inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Load Cart</button>
                  }

                  <button onClick={handleEmptyCart} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Empty Cart</button>
                  <button onClick={handleCheckOut} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Check Out</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <h3 class="pl-20">Completed Orders:</h3>

    </div>
  )
}

export default Cart