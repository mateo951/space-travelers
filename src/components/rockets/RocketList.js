import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRockets } from '../../redux/rockets/rockets';
import RocketItem from './RocketItem';
import style from './rockets.module.css';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const loadAction = bindActionCreators(loadRockets, dispatch);

  useEffect(() => {
    if (rockets.length === 0) loadAction();
    return () => null;
  }, []);

  return (
    <>
      <ul className={style.rocketsList}>
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
