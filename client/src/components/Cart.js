import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { loadCarts } from '../actions/carts'

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
        {carts.cart.length === 0 ? <div>add stuff</div> : <div>show stuff</div>}
      </div>
    </div>
  )
}

export default Cart