import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let outPut = null;
  let ing = Object.keys(props.ingredients);

  console.log(props.ingredients)

  outPut = ing.map((ingName) => {
    return [...Array(props.ingredients[ingName])].map((_, i) => {
      return <BurgerIngredient key={ingName + i} type={ingName}/>
    })
  })
  console.log(outPut)
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {outPut}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger;