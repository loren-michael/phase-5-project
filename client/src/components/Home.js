import React from 'react'
import SignUp from './SignUp'
import NavBar from './NavBar'
import ItemsContainer from './ItemsContainer'
import ItemForm from './ItemForm'
// import Login from './Login'

const Home = () => {
  return (
    <div>
      <div>
        <ItemsContainer />
        <ItemForm />
      </div>
    </div>
  )
}

export default Home