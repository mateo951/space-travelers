const GET_MISSIONS = 'spaceTravelers/missions/GET_MISSIONS'

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload
})

const reducer = (state = 10, action) => {
  switch (action.payload) {
    case GET_MISSIONS:
      return { ...state }
    default:
      return state;
  }
}

export default reducer;