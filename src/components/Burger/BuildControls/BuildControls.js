import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Total price: {props.price.toFixed(2)}</p>
      {controls.map((control) => {
        return <BuildControl
          label={control.label}
          type={control.type}
          key={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          ings={props.ings}/>
        })}
    </div>
  )
}

export default BuildControls;
