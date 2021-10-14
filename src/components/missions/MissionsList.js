/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import MissionItem from './MissionItem';
import style from './missions.module.css';
import { fetchGetMissions } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  const loadAction = bindActionCreators(fetchGetMissions, dispatch);

  console.log(missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(loadAction);
  }, []);

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
