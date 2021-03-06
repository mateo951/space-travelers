import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ReservedMissions from './ReservedMissions';
import ReservedRockets from './ReservedRockets';
import style from './profile.module.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved);

  const reservedMissons = missions.filter((missions) => missions.reserved);
  return (
    <div className={style.mainDiv}>
      <div className={style.colDiv}>
        <h2>My Missions</h2>
        <Table striped bordered hover>
          <tbody>
            {reservedMissons.length > 0 ? reservedMissons.filter((mission) => mission.reserved)
              .map((mission) => (
                <ReservedMissions
                  key={mission.mission_id}
                  id={mission.mission_id}
                  mission_name={mission.mission_name}
                  description={mission.mission_description}
                />
              )) : <tr><td>You haven`t joined any missions yet</td></tr>}
          </tbody>
        </Table>
      </div>
      <div className={style.colDiv}>
        <h2>My Rockets</h2>
        <Table striped bordered hover>
          <tbody>
            {reserved.length > 0 ? reserved.filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <ReservedRockets
                  key={rocket.id}
                  id={rocket.id}
                  reserved={rocket.reserved}
                  rocketName={rocket.rocket_name}
                  description={rocket.description}
                />
              )) : <tr><td>You haven`t reserved any rockets yet</td></tr>}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Profile;
