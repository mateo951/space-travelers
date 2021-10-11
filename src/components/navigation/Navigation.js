import React from "react";
import { NavLink } from "react-router-dom";
import planetLogo from '../../media/planet.png'
import style from './navigation.module.css'

const Navigation = () => (
  <header className={style.header}>
      <NavLink to="/"><img className={style.logo} src={planetLogo} /></NavLink>
      <NavLink className={style.listitems}  to="/" exact>
        Rockets  
      </NavLink>
      <NavLink className={style.listitems} to="/missions">
        Missions
      </NavLink>
      <NavLink className={style.listitems} to="/profile">
        My Profile
      </NavLink>
  </header>
)

export default Navigation;