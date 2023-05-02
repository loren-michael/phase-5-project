import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/sellit-4.png'
import { useSelector, useDispatch } from 'react-redux';
import { deleteSession } from '../actions/sessions';


const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loggedIn, currentUser } = useSelector(store => store.sessions);

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(dispatch(deleteSession()))
    .then(navigate('/'))
  }

  return (
    <div className="navBar">
      <span>
        <img src={logo} alt="Sell It! Home" class="h-36"></img>
        {loggedIn ? 
      <span className="loginLinks">
        <span>Welcome, {currentUser.username}! </span>
        <FontAwesomeIcon onClick={handleLogout} icon={faArrowRightFromBracket} size="xl" style={{color: "#000000",}} />
        <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#000000",}} />
      </span>
        :
        <span className="loginLinks">
          <NavLink to="/signup">Log In or Sign Up </NavLink>
          <FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#000000",}} />
        </span>
      }
      </span>
    </div>
  )
}

export default NavBar