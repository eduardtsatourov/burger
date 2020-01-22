import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => {
  return (
    <div className={classes.Logo} alt="logo">
      <img src={burgerLogo}/>
    </div>
  )
}

export default logo;
