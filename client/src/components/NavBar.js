import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faTimes, faInfoCircle, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon="fa-solid fa-s" />

const NavBar = () => {

  return (
    <div className="navBar">
      <span>
        <FontAwesomeIcon icon={faS}/>
      </span>
    </div>
  )
}

export default NavBar