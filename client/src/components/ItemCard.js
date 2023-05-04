import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const ItemCard = ({ item, setDetailedItem }) => {
  // const itemSummary = item.description.substring(0,39);
  const navigate = useNavigate()

  // console.log(item.id)

  function handleViewItem() {
    setDetailedItem(item)
    navigate(`/items/${item.id}`)
  }
  // console.log(item)

  return (
      <a class="card" href={`/items/${item.id}`} style={{height: "300px", margin: "10px"}} onClick={handleViewItem} >
        <div class="content centered">
          <div class="header">{item.title}</div>  
          <div className="center">
            <img 
              className="image"
              class="image top aligned"
              src={item.image} 
              alt={item.description}
              id="item-card-image"
            />
          </div>
        </div>
        <div>
          <div class="absolute bottom-20 left-5 font-sans text-lg" >
            <FontAwesomeIcon icon={faUser} style={{color: "#8c8c8c",}} /> {item.user.username}
          </div>
          <span class="absolute bottom-20 right-5 font-sans text-lg">
            ${item.price}
          </span>
        </div>
        <button class="ui button" onClick={handleViewItem}>View Item</button>
      </a>
  )
}

export default ItemCard