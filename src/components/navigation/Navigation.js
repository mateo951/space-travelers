import React from 'react';
import { NavLink } from 'react-router-dom';
import planetLogo from '../../media/planet.png';
import style from './navigation.module.css';

const Navigation = () => (
  <>
    <header className={style.header}>
      <div className={style.logoDiv}>
        <NavLink to="/"><img className={style.logo} src={planetLogo} alt="rocket logo" /></NavLink>
        <h1 className={style.logoTitle}>Space Traveler&apos;s Hub</h1>
      </div>
      <div className={style.navlinks}>
        <NavLink activeClassName={style.active} className={style.listitems} to="/" exact>
          Rockets
        </NavLink>
        <NavLink activeClassName={style.active} className={style.listitems} to="/missions">
          Missions
        </NavLink>
        <NavLink activeClassName={style.active} className={style.listitems} to="/profile">
          My Profile
        </NavLink>
      </div>
    </header>
    <hr className={style.separation} />
  </>
);

export default Navigation;
