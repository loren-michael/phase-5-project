const baseURL = 'http://localhost:3000';
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export const addItem = item => {
  return {
    type: "ADD_ITEM",
    payload: item
  }
}

export const loadItems = () => {
  return (dispatch) => {
    fetch(baseURL + "/items")
    .then(r => r.json())
    .then(data => dispatch({type: "LOAD_ITEMS", payload: data}))
  }
}