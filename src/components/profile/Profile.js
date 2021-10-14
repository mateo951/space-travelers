import React from 'react';
import { useSelector } from 'react-redux';
import ReservedMissions from './ReservedMissions';
import ReservedRockets from './ReservedRockets';
import style from './profile.module.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved);
  console.log(reserved);

  const reservedMissons = missions.filter((missions) => missions.reserved);
  return (
    <div className={style.profileContainer}>
      <div>
        <h3>My Missions</h3>
        <table>
          <tbody>
            {reservedMissons.length > 0 ? reservedMissons.map((mission) => (
              <ReservedMissions key={mission.mission_id} mission_name={mission.mission_name} />
            )) : <tr><td>You have not join any missions yet</td></tr>}
          </tbody>
        </table>
      </div>
      <div>
        <h3>My Rockets</h3>
        <table>
          <tbody>
            {(reserved.length > 0 && reserved.map((rocket) => (
              <ReservedRockets key={rocket.id} rocketName={rocket.rocket_name} />
            ))) || <tr><td>You haven`t reserved any rockets yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
