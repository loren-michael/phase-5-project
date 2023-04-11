import React from 'react'

const NavBar = ({ items }) => {
  console.log(items)
  return (
    <div>NavBar
      {items.map(item => {
        return (
          <li>{item.name}</li>
        )
      })}
    </div>
  )
}

export default NavBar