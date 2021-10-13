import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRockets } from '../../redux/rockets/rockets';
import RocketItem from './RocketItem';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAction = bindActionCreators(loadRockets, dispatch);
    loadAction();
    return null;
  }, [dispatch]);

  return (
    <>
      <ul className="rockets-list">
        {rockets.map((rocket) => (
          <RocketItem
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocket_name}
            description={rocket.description}
            flickrImages={rocket.flickr_images}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </>
  );
};

export default RocketList;
