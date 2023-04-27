import React from 'react'
import ItemsContainer from './ItemsContainer'
import { useSelector, useDispatch } from 'react-redux';



const Home = () => {

  return (
    <div>
      <div>
        <ItemsContainer />
      </div>
    </div>
  )
}

export default Home