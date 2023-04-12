const initialState = { itemsLoading: true, items: [] }

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ITEMS_LOADED":
      return {
        ...state,
        itemsLoading: false,
        items: action.payload
      }
    
    
    // case "ADD_ITEM":
    //   return {
    //     ...state,
    //     items: [...state.items, action.payload]
    //   }


    default:
      return initialState;
  }
}

export default itemsReducer;