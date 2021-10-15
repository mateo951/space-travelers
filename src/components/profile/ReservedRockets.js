import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';
import style from '../rockets/rockets.module.css';

const ReservedRockets = (props) => {
  const {
    rocketName,
    reserved,
    id,
    description,
  } = props;

  const dispatch = useDispatch();
  const dispatchBookRocket = bindActionCreators(bookRocket, dispatch);
  const dispatchCancelRocket = bindActionCreators(cancelRocket, dispatch);

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
    <tr>
      <td>
        <h6>{rocketName}</h6>
        <p>{description}</p>
        <div>{(reserved && (<button id={id} className={style.reserved} onClick={cancelationRocketHandler} type="button">Cancel Reservation</button>)) || <button id={id} className={style.submitReserve} onClick={bookRocketHandler} type="button">Reserve Rocket</button>}</div>
      </td>
    </tr>
  );
};

ReservedRockets.propTypes = {
  rocketName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default ReservedRockets;
