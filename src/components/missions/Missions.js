import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetMissions } from '../../redux/missions/missions';

import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetMissions());
  }, []);
  const { missions } = useSelector((state) => state.missions);
  if (missions === undefined) {
    return null;
  }
  return (
    <div>
      <ul>
        {
          missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              mission_description={mission.mission_description}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Missions;
