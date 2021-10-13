/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import style from './missions.module.css';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <div>
      <table className={style.test}>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>.</th>
          </tr>
          {
            missions.map((mission) => (
              <MissionItem
                key={mission.mission_id}
                mission_id={mission.mission_id}
                mission_name={mission.mission_name}
                mission_description={mission.mission_description}
                mission_reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
