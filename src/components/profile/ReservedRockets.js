import React from 'react';
import PropTypes from 'prop-types';

const ReservedRockets = (props) => {
  const { rocketName } = props;

  return (
    <tr>
      <td>{rocketName}</td>
    </tr>
  );
};

ReservedRockets.propTypes = {
  rocketName: PropTypes.string.isRequired,
};

export default ReservedRockets;
