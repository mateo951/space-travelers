import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spaceTravelers/missions/GET_MISSIONS';
const HANDLE_FETCH_ERROR = 'bookStore/books/HANDLE_FETCH_ERROR';

export const getMissions = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const fetchGetMissions = () => async (dispatch) => {
  try {
    axios.get(apiURL)
      .then((response) => {
        const missions = [];
        const { data } = response;
        Object.entries(data).forEach(([value]) => {
          const mission = {
            mission_id: value.mission_id,
            mission_name: value.mission_name,
            mission_description: value.description,
          };
          missions.push(mission);
        });
        dispatch(getMissions(missions));
      });
  } catch {
    dispatch(handleFetchError());
  }
};

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MISSIONS:
      return { ...state, missions: payload.slice() };
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
