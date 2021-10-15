/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import style from './missionItem.module.css';

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
      {mission_reserved && (<td className="badge rounded-pill bg-primary text-light m-2">ACTIVE MEMBER</td>)}
      {!mission_reserved && (<td className="badge rounded-pill bg-secondary text-light m-2">NOT A MEMBER</td>)}
      <td className={style.bttnwidth}>{(mission_reserved && (<button className="btn btn-outline-danger m-2" type="button" onClick={() => handleClick(mission_id, 'leave')}>{mission_reserved ? 'LEAVE MISSION' : 'JOIN NOW'}</button>)) || <button className="btn btn-outline-secondary m-2" type="button" onClick={() => handleClick(mission_id, 'join')}>{mission_reserved ? 'LEAVE MISSION' : 'JOIN NOW'}</button>}</td>
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
