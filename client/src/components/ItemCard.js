import React from 'react';


const ItemCard = ({item}) => {
  const itemSummary = item.description.substring(0,39);


  return (
      <div class="card" href={`/items/${item.id}`} style={{height: "300px", margin: "10px"}} >
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
        <button class="ui button">View Item</button>
      </div>
  )
}

export default ItemCard