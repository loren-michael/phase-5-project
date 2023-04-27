import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemCard = ({item}) => {
  const itemSummary = item.description.substring(0,79);

  return (
    <Card href={`/items/${item.id}`} className="item-card">
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Image className="item-card-image" src={item.image} />
        <Card.Description>{itemSummary}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ItemCard