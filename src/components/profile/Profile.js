import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ReservedMissions from './ReservedMissions';
import style from './profile.module.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const reservedMissons = missions.filter((missions) => missions.reserved);
  return (
    <div className={style.mainDiv}>
      <div className={style.colDiv}>
        <h2>My Missions</h2>
        <Table striped bordered hover>
          <tbody>
            {reservedMissons.length > 0 ? reservedMissons.map((mission) => (
              <ReservedMissions key={mission.mission_id} mission_name={mission.mission_name} />
            )) : <tr><td>You have not join any missions yet</td></tr>}
          </tbody>
        </Table>
      </div>
      <div className={style.colDiv}>
        <h2>My Rockets</h2>
        <Table striped bordered hover>
          <tbody>
            {reservedMissons.length > 0 ? reservedMissons.map((mission) => (
              <ReservedMissions key={mission.mission_id} mission_name={mission.mission_name} />
            )) : <tr><td>You have not join any missions yet</td></tr>}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Profile;
