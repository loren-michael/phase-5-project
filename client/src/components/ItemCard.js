import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const ItemCard = ({item}) => {
  // const itemSummary = item.description.substring(0,79);

  // const image = () => {
    // <Image src={item.image} fluid />
  // }

  return (
      <div class="card" href={`/items/${item.id}`} style={{height: "300px", margin: "10px"}} >
        <div class="content centered">
          <div class="header">{item.title}</div>  
          {/* {image} */}

        <div className="center">
        <img 
          className="image"
          class="image top aligned"
          src={item.image} 
          alt={item.description}
          
        />
        </div>
        </div>
        {/* <Image centered top aligned
          style={{
            margin: "auto",
            height: "200px",
            width: "auto",
            padding: "5px",
            display: "block"
          }}
          src={item.image}
        /> */}
          
      </div>
  )
}

export default ItemCard