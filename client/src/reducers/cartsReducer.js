const initialState = {
  carts: [],
}

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_CARTS":
      return {
        ...state,
        carts: action.payload
      };
    case "ADD_ITEM":
      return {
        ...state,
        carts: [...state.items, action.payload]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        carts: state.items.filter(item => item.id !== action.payload.id)
      };
    case "EMPTY_CART":
      return {
        ...state,
        carts: []
      }
    default:
      return state;
  }
}

export default itemsReducer;