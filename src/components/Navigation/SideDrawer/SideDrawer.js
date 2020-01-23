import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxHoc';
import classes from './SideDrawer.module.css';

export default function SideDrawer(props) {
const attachClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close].join(' ');
  
  return (
    <Aux>
      <Backdrop
        show={props.show}
        click={props.click} />
        <div className={attachClasses}>
          <div className={classes.Logo}>
            <Logo/>
          </div>
          <nav>
            <NavigationItems/>
          </nav>
        </div>
    </Aux>
  )
}
