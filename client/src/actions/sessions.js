export const createSession = user => {
  return {
    type: "CREATE_SESSION",
    payload: user
  }
}

export const deleteSession = () => {
  return {
    type: "DELETE_SESSION",
    payload: null
  }
}