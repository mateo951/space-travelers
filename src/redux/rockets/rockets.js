const GET_ROCKETS = 'spaceTravelers/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spaceTravelers/rockets/RESERVE_ROCKET';
const URL = 'https://api.spacexdata.com/v3/rockets';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.state;
    case RESERVE_ROCKET:
      return action.state;
    default:
      return state;
  }
};

export const loadRockets = () => async (dispatch) => {
  const res = await fetch(URL);
  const state = await res.json();
  dispatch({ type: GET_ROCKETS, state });
};

export default reducer;
