import React from 'react';
import Aux from '../../../hoc/AuxHoc';

const orderSummary = (props) => {
  const ingredientSummary = props.ingredients;
  const output = Object.keys(ingredientSummary).map(el => {
   return <li key={el}> <span style={{textTransform : 'capitalize'}} >{el}</span> {ingredientSummary[el]}</li>
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {output}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  )
}

export default orderSummary;