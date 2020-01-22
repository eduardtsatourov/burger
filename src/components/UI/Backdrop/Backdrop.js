import React from 'react';
import classes from './Backdrop.module.css'

const backdrop = (props) => {
  return props.show ? <div onClick={props.click} className={classes.Backdrop}></div> : null
}

export default backdrop;