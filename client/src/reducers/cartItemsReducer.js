const initialState = {
  cartItems: []
}

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload
      };
    case "CREATE_CART_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default itemsReducer;