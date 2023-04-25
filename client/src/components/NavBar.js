import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faCircleUser, faTimes, faInfoCircle, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/sellit-4.png'
import { useSelector } from 'react-redux';

const NavBar = () => {

  const {loggedIn, currentUser } = useSelector(store => store.sessions)

  return (
    <div className="navBar">
      <span>
        <img src={logo} alt="Sell It!" width="auto" height="150"></img>
      </span>
    {/* Make this conditional on current user */}
      <span className="loginLinks">
        <Link>Log In or Sign Up </Link>
        <FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#000000",}} />
      </span>

    </div>
  )
}

export default NavBar