import React from 'react';
import { PropTypes } from 'prop-types';

const RocketItem = (props) => {
  const {
    id,
    rocketName,
    description,
    flickrImages,
  } = props;

  return (
    <li className="rocket-item">
      <img src={flickrImages} alt="rocket" />
      <div className="desc-container">
        <h2>{rocketName}</h2>
        <p>{description}</p>
        <button id={id} className="submit-reserve" type="button">Reserve Rocket</button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketItem;
