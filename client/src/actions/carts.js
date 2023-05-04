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

export const loadCarts = () => {
  return (dispatch) => {
    fetch('/user_carts')
    .then(r => r.json())
    .then(carts => dispatch({type: "LOAD_CARTS", payload: carts}))
  }
}

export const loadItems = () => {
  return (dispatch) => {
    fetch("/items")
    .then(r => r.json())
    .then(data => dispatch({type: "LOAD_ITEMS", payload: data}))
  }
}