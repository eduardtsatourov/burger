import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="#" active>Home</NavigationItem>
      <NavigationItem link="#">Burger</NavigationItem>
    </ul>
  )
}

export default navigationItems;