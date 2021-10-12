/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  mission_id, mission_name, mission_description,
}) => (
  <li>
    <div>
      <p>{mission_id}</p>
      <p>{mission_name}</p>
      <p>{mission_description}</p>
    </div>
  </li>
);

Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  mission_description: PropTypes.string.isRequired,
};

export default Mission;
