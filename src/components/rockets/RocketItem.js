import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';
import style from './rockets.module.css';

const RocketItem = (props) => {
  const dispatch = useDispatch();
  const dispatchBookRocket = bindActionCreators(bookRocket, dispatch);
  const dispatchCancelRocket = bindActionCreators(cancelRocket, dispatch);

  const {
    id,
    rocketName,
    description,
    flickrImages,
    reserved,
  } = props;

  const bookRocketHandler = (e) => {
    e.preventDefault();
    const bookingId = Number(e.target.id);
    dispatchBookRocket(bookingId);
  };

  const cancelationRocketHandler = (e) => {
    e.preventDefault();
    const bookingId = Number(e.target.id);
    dispatchCancelRocket(bookingId);
  };

  return (
    <li className={style.rocketItem}>
      <img src={flickrImages} className={style.rocketImage} alt="rocket" />
      <div className={style.descContainer}>
        <h3>{rocketName}</h3>
        <p>
          {(reserved && (<span>Reserved</span>))}
          {' '}
          {description}
        </p>
        <div>{(reserved && (<button id={id} className={style.reserved} onClick={cancelationRocketHandler} type="button">Cancel Reservation</button>)) || <button id={id} className={style.submitReserve} onClick={bookRocketHandler} type="button">Reserve Rocket</button>}</div>
      </div>
    </li>
  );
};

RocketItem.defaultProps = {
  reserved: false,
};

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool,
};

export default RocketItem;
