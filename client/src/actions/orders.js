const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export const createOrder = (cart) => {
  return (dispatch) => {
    dispatch({type: "CREATE_ORDER", payload: cart})
  }
}