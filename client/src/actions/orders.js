const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export const createOrder = (cart) => {
  return (dispatch) => {
    fetch('/orders', {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ cart })
    })
    .then(r => r.json())
    .then(order => dispatch({type: "CREATE_ORDER", payload: order}))
  }
}