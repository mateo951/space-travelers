import React from 'react';
import { useSelector } from 'react-redux';
import ReservedMissions from './ReservedMissions';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const reservedMissons = missions.filter((missions) => missions.reserved);
  return (
    <div>
      <h2>My Missions</h2>
      <table>
        <tbody>
          {reservedMissons.length > 0 ? reservedMissons.map((mission) => (
            <ReservedMissions key={mission.mission_id} mission_name={mission.mission_name} />
          )) : <tr><td>You have not join any missions yet</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
