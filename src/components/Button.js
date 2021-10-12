import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMissions } from '../redux/missions/missions';

const Button = () => {
  const dispatch = useDispatch();
  const dispatchTest = bindActionCreators(getMissions, dispatch);
  const handleClick = () => {
    dispatchTest();
  };

  return (
    <button type="button" onClick={handleClick}>Click it!</button>
  );
};

export default Button;
