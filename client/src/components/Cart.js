import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { loadCarts } from '../actions/carts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const dispatch = useDispatch()
  const carts = useSelector(store => store.carts)
  console.log(carts)


  useEffect(() => {
    dispatch(loadCarts())
  }, [])


  return (
    <div>
      <NavBar />
      <div>
        <h3 class="pl-20">Your Carts:</h3>
        {carts.carts.map(cart => {
          return (
            <div key={cart.id} class="flex flex-wrap w-9/12 h-24 m-auto bg-slate-200 rounded border-2 border-black ">
              <div class="w-24">{cart.active ? <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#00ff00",}} /> : <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#ff0000",}} />}</div>
              <div>Items:
                {cart.items.map(item => {
                  return (
                    <li>{item.title.substring(0,20)}</li>
                  )
                })}
              </div>
              <div>Hold space for price</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart