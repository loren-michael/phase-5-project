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
        <a href="/"><img src={logo} alt="Sell It! Home" width="auto" height="150"></img></a>
      </span>

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

      {/* <div class="ui centered grid menu">
        <div class="center aligned column">
          <div class="ui compact menu">
            <a class="item">View All</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
            <a class="item">Guitars</a>
          </div>        
        </div>
      </div>     */}

    </div>
  )
}

export default NavBar