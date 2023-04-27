import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const ItemCard = ({item}) => {
  // const itemSummary = item.description.substring(0,79);

  return (
    <span>
      <Card href={`/items/${item.id}`} style={{height: "300px", margin: "10px"}} >
        <Card.Content centered>
          <Card.Header>{item.title}</Card.Header>
          <Image  
            style={{
              margin: "auto",
              height: "200px",
              padding: "5px",
              display: "block"
            }}
            src={item.image}
          />
        </Card.Content>
      </Card>
    </span>
  )
}

export default ItemCard