export const createSession = user => {
  return {
    type: "CREATE_SESSION",
    payload: user
  }
}