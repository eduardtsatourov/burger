import React from 'react';
import Aux from '../../hoc/AuxHoc';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

 let layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;