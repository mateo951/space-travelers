/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionItem = ({
  mission_id, mission_name, mission_description, mission_reserved,
}) => {
  const dispatch = useDispatch();
  const handleClick = (id, action) => {
    if (action === 'join') {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };
  return (
    <tr key={mission_id}>
      <td>{mission_name}</td>
      <td>{mission_description}</td>
      {mission_reserved ? <td className="badge mx-2 text-uppercase bg-secondary my-0">ACTIVE MEMBER</td> : <td className="badge mx-2 text-uppercase bg-secondary my-0">NOT A MEMBER</td>}
      <td>{mission_reserved ? <button type="button" onClick={() => handleClick(mission_id, 'leave')}>{mission_reserved ? 'LEAVE MISSION' : 'JOIN NOW' }</button> : <button type="button" onClick={() => handleClick(mission_id, 'join')}>{mission_reserved ? 'LEAVE MISSION' : 'JOIN NOW' }</button> }</td>
    </tr>
  );
};

MissionItem.defaultProps = {
  mission_reserved: false,
};

MissionItem.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  mission_description: PropTypes.string.isRequired,
  mission_reserved: PropTypes.bool,
};

export default MissionItem;
