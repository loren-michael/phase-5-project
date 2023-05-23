const initialState = {
  cartItems: []
}

const cartItemsReducer = (state=initialState, action) => {
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

    // case "DELETE_CART_ITEM":
    //   return (dispatch) {
    //     ...state,
    //     carts: {
    //       carts: [
            
    //       ]
    //     }
    //   };
    // case "DELETE_CART_ITEM":
    //   return {
    //     ...state,
    //     carts: {
    //       carts: state.carts.map(cart => {
    //         if (cart.id === action.payload.cart_id) {
    //           return cart.items.filter(item => item.id !== action.payload.item_id)
    //         } else {
    //           return cart
    //         }
    //       })
    //     }
    //     // carts: state.carts.cartItems.filter(item => item.id !== action.payload.id)
    //   };
    default:
      return state;
  }
}

export default cartItemsReducer;