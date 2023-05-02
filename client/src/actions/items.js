const baseURL = 'http://localhost:3001';
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export const addItem = item => {
  return (dispatch)  => {
    fetch(baseURL + "/items", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(item)
    })
    .then(r => r.json())
    .then(item => dispatch({ type: "ADD_ITEM", payload: item }))
  }
}

export const loadItems = () => {
  return (dispatch) => {
    fetch(baseURL + "/items", {
      method: "GET",
      headers: headers
    })
    .then(r => r.json())
    .then(data => dispatch({type: "LOAD_ITEMS", payload: data}))
  }
}