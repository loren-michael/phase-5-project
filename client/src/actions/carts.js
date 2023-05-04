const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export const addItemToCart = item => {
  return (dispatch)  => {
    fetch("/cart", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(item)
    })
    .then(r => r.json())
    .then(item => dispatch({ type: "ADD_ITEM", payload: item }))
  }
}

export const loadCart = id => {
  return (dispatch) => {
    fetch('/cart' + id)
    .then(r => r.json())
    .then(cart => dispatch({type: "LOAD_CART", payload: cart}))
  }
}

export const loadItems = () => {
  return (dispatch) => {
    fetch("/items")
    .then(r => r.json())
    .then(data => dispatch({type: "LOAD_ITEMS", payload: data}))
  }
}