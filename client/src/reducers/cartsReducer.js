const initialState = {
  carts: [],
};

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_CARTS":
      return {
        ...state,
        carts: action.payload
      };
    case "CREATE_CART":
      return {
        ...state,
        carts: [...state, action.payload]
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
        carts: state.carts.map(cart => {
          if (cart.id === action.payload.id) {
            return action.payload
          } else {
            return cart
          }
        })
      };
    case "ACTIVATE_CART":
      return {
        ...state,
        carts: state.carts.map(cart => {
          if (cart.id !== action.payload.id) {
            cart.active = false
            return cart
          } else {
            return action.payload
          }
        })
      };
    case "DEACTIVATE_CART":
      return {
        ...state,
        carts: state.carts.map(cart => {
          if (cart.id !== action.payload.id) {
            return cart
          } else {
            return action.payload
          }
        })
      };
    default:
      return state;
  }
}

export default itemsReducer;