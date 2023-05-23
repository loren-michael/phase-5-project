const initialState = {
  currentUser: {},
  loggedIn: false
}

const sessionsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_SESSION":
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload
      }
    case "CREATE_SESSION":
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload
      };
    case "ADD_ITEM_TO_USER":
      return {
        ...state,
        loggedIn: true,
        currentUser: {
          items: [...state.items, action.payload]
        }
      };
    case "DELETE_ITEM_FROM_USER":
      return {
        ...state,
        loggedIn: true,
        currentUser: {
          ...state,
          items: [state.currentUser.items.filter(item => item.id !== action.payload.id)]
        }
      };
    case "DELETE_SESSION":
      return initialState
    default:
      return state;
  }
}

export default sessionsReducer;