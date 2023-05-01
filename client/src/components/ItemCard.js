import React from 'react';


const ItemCard = ({item}) => {
  const itemSummary = item.description.substring(0,79);


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
            />
          </div>
          <div>{itemSummary}</div>
        </div>
      </div>
  )
}

export default ItemCard