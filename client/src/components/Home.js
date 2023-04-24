import React from 'react'
import SignUp from './SignUp'
import NavBar from './NavBar'
import ItemsContainer from './ItemsContainer'
// import Login from './Login'

const Home = () => {
  return (
    <div>
      <NavBar />

      <div>
        <ItemsContainer />
      </div>
    </div>
  )
}

export default Home