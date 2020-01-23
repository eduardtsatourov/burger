import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.HideMenu} onClick={props.show}>Menu</div>
      <nav className={classes.hideNav}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
