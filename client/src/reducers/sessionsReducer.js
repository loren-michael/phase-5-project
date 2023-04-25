const initialState = {
  currentUser: {},
  loggedIn: false
}

const sessionsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOG_IN":
      return {
        loggedIn: true,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default sessionsReducer;