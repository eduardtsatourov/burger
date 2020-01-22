import React from 'react';
import Aux from '../../hoc/AuxHoc';
import classes from './Layout.module.css';

 let layout = (props) => {
  return (
    <Aux>
      <div>
        Toolbar, Sidedrawer, Backdrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;