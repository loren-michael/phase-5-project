const initialState = {
  items: []
}

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_ITEMS":
      return {
        ...state,
        items: action.payload
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default itemsReducer;