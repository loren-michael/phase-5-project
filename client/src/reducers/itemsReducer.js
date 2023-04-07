const initialState = { itemsLoading: true, items: [{}] }

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    // case "BLOGS_LOADED":
    //   return {
    //     ...state,
    //     blogsLoading: false,
    //     blogs: action.payload
    //   }

    default:
      return initialState;
  }
}

export default itemsReducer;

// get request -> controller -> action and does something (updates the database)?

// actions : { type: "LOAD_BLOGS"}
// actions : { type: "BLOGS_LOADED", payload: data }