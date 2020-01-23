import React from 'react';
import Aux from '../../../hoc/AuxHoc';
import Button from '../../UI/Button/Button';

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
      <p>Total price is: € {props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button
        btnType="Danger"
        clicked={props.cancel}>
          CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.accept}
        showSpinner={props.show}>
          CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;