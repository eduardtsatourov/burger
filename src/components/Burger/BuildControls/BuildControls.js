import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'}
]

const BuildControls = () => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => {
        return <BuildControl label={control.label} key={control.label}/>
        })}
    </div>
  )
}

export default BuildControls;
