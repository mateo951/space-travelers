/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const ReservedMissions = ({ mission_name }) => (
  <tr>
    <td>{mission_name}</td>
  </tr>
);

ReservedMissions.propTypes = {
  mission_name: PropTypes.string.isRequired,
};

export default ReservedMissions;
