const GET_ROCKETS = 'spaceTravelers/rockets/GET_ROCKETS';
const BOOK_ROCKET = 'spaceTravelers/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'spaceTravelers/rockets/CANCEL_ROCKET';
const URL = 'https://api.spacexdata.com/v3/rockets';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.state;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export const loadRockets = () => async (dispatch) => {
  const res = await fetch(URL);
  const state = await res.json();
  dispatch({ type: GET_ROCKETS, state });
};

export const bookRocket = (id) => ({ type: BOOK_ROCKET, id });

export const cancelRocket = (id) => ({ type: CANCEL_ROCKET, id });

export default reducer;
