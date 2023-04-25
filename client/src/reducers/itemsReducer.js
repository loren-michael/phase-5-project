const initialState = { itemsLoading: true, items: [] }

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return [...state, action.payload ]
    
    case "":
      return []
    
    default:
      return state;
  }
}

export default itemsReducer;