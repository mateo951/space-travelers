/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import MissionItem from './MissionItem';
import style from './missions.module.css';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <div className={style.mainDiv}>
      <Table striped bordered className={style.test}>
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
      </Table>
    </div>
  );
};

export default Missions;
