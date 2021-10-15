/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const ReservedMissions = ({
  id,
  description,
  mission_name,
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
    <tr>
      <td>
        <h6>{mission_name}</h6>
        <p>{description}</p>
        <button className="btn btn-outline-danger m-2" onClick={() => handleClick(id, 'leave')} type="button">Leave Mission</button>
      </td>
    </tr>
  );
};

ReservedMissions.propTypes = {
  mission_name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ReservedMissions;
