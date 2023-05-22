import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { activateCart, deleteCart, emptyCart, loadCarts } from '../actions/carts';
import { deleteCartItem } from '../actions/cartItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { deactivateCart } from '../actions/carts';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortedOrders, setSortedOrders] = useState([]);
  const [sortedCarts, setSortedCarts] = useState([]);
  const carts = useSelector(store => store.carts);

  const activeFirst = carts.carts.sort((a, b) => b.active - a.active)

  // const cartsWithoutOrders = carts.carts.filter(cart => cart.purchased = false)
  // console.log("cwo", cartsWithoutOrders)
  // unprocessed means purchased should be false, so filter out any purchased = true
  // const unprocessedCarts = activeFirst.filter(cart => cart.purchased = false)

  console.log("carts", carts)

  // console.log("unprocessed", unprocessedCarts)

  // const orders = carts.carts.filter(cart => cart.purchased = true)

  // console.log("orders", orders)


  useEffect(() => {
    dispatch(loadCarts())
    // carts.carts.forEach(cart => {
    //   if (cart.purchased == false) {
    //     setSortedCarts([...sortedCarts, cart])
    //   } else if (cart.purchased) {
    //     setSortedOrders([...sortedOrders, cart])
    //   }
    // })
    // console.log("carts and orders", sortedCarts, sortedOrders)
  }, [])



  // useEffect(() => {
  //   dispatch(loadCarts())
  //   carts.carts.map(cart => {
  //     if (cart.purchased === true) {
  //       setSortedOrders([...sortedOrders, cart])
  //       console.log("order", cart)
  //     } else {
  //       setSortedCarts([...sortedCarts, cart])
  //       console.log("cart", cart)
  //     }
  //   })
  // }, [])

  useEffect(() => {
  }, [])

  function handleRemoveItem (e) {
    dispatch(deleteCartItem(e.target.id))
  }

  function handleSaveCart (e) {
    dispatch(deactivateCart(e.target.id))
  }

  function handleActivateCart (e) {
    dispatch(activateCart(e.target.id))
  }

  function handleEmptyCart (e) {
    dispatch(emptyCart(e.target.id))
  }

  function handleCheckOut (e) {
    navigate(`/checkout/${e.target.id}`)
  }

  function handleDeleteCart(e) {
    dispatch(deleteCart(e.target.id))
  }


  return (
    <div>
      <NavBar />
      <div>
        <h3 class="pl-20">Your Carts:</h3>
        {activeFirst.map(cart => {
          return (
            <div key={cart.id} class="p-3 mb-3  w-9/12 m-auto bg-slate-200 rounded border-2 border-black columns-auto">
              <div class="w-15">
                  {cart.active ? 
                    <div class="m-8"><FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#00ff00",}} /></div> 
                  : 
                    <div class="m-8"><FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#ff0000",}} /></div>
                  }
              </div>
              <div class="w-fit font-sans">
                {cart.items.map(item => {
                  const cartItemId = cart.cart_items.filter(ci => ci.item_id === item.id)
                  return (
                    <div class="flex flex-wrap" key={item.id}>
                      <button id={cartItemId[0].id} onClick={(e) => handleRemoveItem(e)} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow">Remove</button>
                      <p class="pl-5 align-middle">{item.title.substring(0,25)}</p>
                      <div class="pl-12"> ${item.price}</div>
                    </div>
                  )
                })}
                <br></br>
                <p class="font-sans font-semibold text-xl">TOTAL:  ${cart.cart_price}</p>
                <br></br>
              </div>
              <div>
                {cart.cart_total}
              </div>
              <div class="relative h-32 w-32">
                <div class="">
                  <br></br>
                  {
                    cart.active ?
                    <div>
                      <button id={cart.id} onClick={(e) => handleSaveCart(e)} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Save Cart</button>
                      <button id={cart.id} onClick={(e) => handleEmptyCart(e)} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Empty Cart</button>
                      {
                        cart.cart_items ? 
                        <button id={cart.id} onClick={(e) => handleCheckOut(e)} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Check Out</button>
                        :
                        <div></div>
                      }
                      
                    </div>
                    :
                    <div>
                      <button id={cart.id} onClick={(e) => handleActivateCart(e)} class=" inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Load Cart</button>
                      <button id={cart.id} onClick={(e) => handleDeleteCart(e)} class=" inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Delete Cart</button>
                    </div>
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
        {
          sortedOrders ? 
          <div>
            <h3 class="pl-20">Completed Orders:</h3>
            {sortedOrders.map(order => {
              return (
                <div key={order.id} class="p-3 pb-6 mb-3 w-9/12 m-auto bg-slate-200 rounded border-2 border-black columns-auto">
                  <div class="w-15 font-sans text-lg">
                  <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#000000",}} /> Order Completed<br></br><br></br>
                  </div>
                  <div class="w-fit font-sans">
                    {order.items.map(item => {
                      const cartItemId = order.cart_items.filter(ci => ci.item_id === item.id)
                      return (
                        <div class="flex flex-wrap" key={item.id}>
                          <p class="pl-5 align-middle">{item.title.substring(0,25)}</p>
                          <div class="pl-12"> ${item.price}</div>
                        </div>
                      )
                    })}
                    <br></br>
                    <p class="font-sans font-semibold text-xl">TOTAL:  ${order.cart_price}</p>
                    <br></br>
                  </div>
                  <div>
                    {order.cart_total}
                  </div>
                  <div class="relative h-32 w-32">
                    <div class="">
                      <br></br>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          :
          <div></div>
        }

    </div>
  )
}

export default Cart