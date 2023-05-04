const initialState = {
  cart: [],
}

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_CART":
      return {
        ...state,
        cart: action.payload
      };
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.items, action.payload]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        cart: state.items.filter(item => item.id !== action.payload.id)
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
}

export default itemsReducer;