import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[90px]'>
      <div className='max-w-[1240px] mx-auto px-[4] flex justify-between'>
        <div>Sell It!</div>
        <input type="text" placeholder='Search'></input>
        <div>Sell Your Gear!</div>
        <div>Watch List</div>
        <div>Cart</div>
        <div>Sign Up</div>
        <div>Log In</div>
        {/* <div>
          <ul>
            <li>Sell Your Gear</li>
            <li>Watch List</li>
            <li>Cart</li>
            <li>Sign Up</li>
            <li>Log In</li>
          </ul>
        </div> */}

        
      </div>
    </div>
  )
}

export default NavBar