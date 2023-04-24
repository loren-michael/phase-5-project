const initialState = { itemsLoading: true, items: [] }

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ITEMS_LOADED":
      return {
        ...state,
        itemsLoading: false,
        items: action.payload
      }
    
    default:
      return state;
  }
}

export default itemsReducer;