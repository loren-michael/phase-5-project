import React, { useState } from 'react'

const ItemForm = () => {
  const [item, setItem] = useState({
    title: "",
    image: "",
    description: "",
    qty: 1,
    category: "",
    condition: "",
    make: "",
    model: "",
    price: 0.00
  })

  console.log(item)

  return (
    <div>
      <form>
        <label htmlFor='title'> Title: </label>
        <input 
          type='text' 
          id="title" 
          value={ item.title }
          onChange={e => setItem({...item, title: e.target.value})}
        />
        <label htmlFor='image'> Image URL: </label>
        <input 
          type='text' 
          id="image" 
          value={ item.image }
          onChange={e => setItem({...item, image: e.target.value})}
        />
        <label htmlFor='description'> Title: </label>
        <textarea 
          type='text' 
          id="description" 
          value={ item.description }
          onChange={e => setItem({...item, description: e.target.value})}
        />
        <label htmlFor='qty'> Title: </label>
        <input 
          type='text' 
          id="qty" 
          value={ item.qty }
          onChange={e => setItem({...item, qty: e.target.value})}
        />
        <label htmlFor='category'> Title: </label>
        <select required
          name="category"
          value={ item.category }
          onChange={e => setItem({...item, category: e.target.value})}
        >
          <option>Guitars</option>
          <option>Keyboards & Synth</option>
          <option>Drums & Percussion</option>
          <option>Folk Instruments</option>
          <option>Pedals & Amps</option>
          <option>Microphones</option>
          <option>Pro Audio</option>
          <option>Accessories</option>
        </select>
        <label htmlFor='condition'> Condition: </label>
        <select required
          name="condition"
          value={ item.condition }
          onChange={e => setItem({...item, condition: e.target.value})}
        >
          <option>New</option>
          <option>Used - Like New</option>
          <option>Used - Good</option>
          <option>Used - Fair</option>
          <option>Used - Poor</option>
        </select>
        <label htmlFor='make'> Make: </label>
        <input 
          type='text' 
          id="make" 
          value={ item.make }
          onChange={e => setItem({...item, make: e.target.value})}
        />
        <label htmlFor='model'> Model: </label>
        <input 
          type='text' 
          id="model" 
          value={ item.model }
          onChange={e => setItem({...item, model: e.target.value})}
        />
        <label htmlFor='price'> Price: </label>
        <input 
          type='text' 
          id="price" 
          value={ item.price }
          onChange={e => setItem({...item, price: e.target.value})}
        />
      </form>
    </div>
  )
}

export default ItemForm