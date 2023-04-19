import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faTimes, faInfoCircle, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/sellit-4.png'

const NavBar = () => {

  return (
    <div className="navBar">
      <span>
        <img src={logo} alt="Sell It!" width="300" height="auto"></img>
      </span>
    </div>
  )
}

export default NavBar