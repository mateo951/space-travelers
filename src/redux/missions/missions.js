/* eslint-disable no-unused-vars */
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spaceTravelers/missions/GET_MISSIONS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelers/missions/LEAVE_MISSION';
const HANDLE_FETCH_ERROR = 'bookStore/books/HANDLE_FETCH_ERROR';

const initialState = {
  missions: [],
};

const getMissions = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const fetchGetMissions = () => async (dispatch) => {
  try {
    axios.get(apiURL)
      .then((response) => {
        const missions = [];
        const { data } = response;
        Object.entries(data).forEach(([key, value]) => {
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

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MISSIONS:
      return { ...state, missions: payload.slice() };
    case HANDLE_FETCH_ERROR:
      return state;
    case JOIN_MISSION: {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missions: newState };
    }
    case LEAVE_MISSION: {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return { ...state, missions: newState };
    }
    default:
      return state;
  }
};

export default reducer;
