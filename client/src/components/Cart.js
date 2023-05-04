import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(store => store.carts)
  console.log(cart)
  
  return (
    <div>
      <NavBar />
      <div>

      </div>
    </div>
  )
}

export default Cart