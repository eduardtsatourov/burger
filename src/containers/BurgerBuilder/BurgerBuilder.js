import React, { Component } from "react";
import Aux from "../../hoc/AuxHoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 1.3,
  meat: 0.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount
    };

    let purchasingEnabled = Object.keys(updatedIngredients).reduce((arr, el) => {return arr + updatedIngredients[el]}, 0) <= 0 ? false : true;
    this.setState({
      ...this.state,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable: purchasingEnabled
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount
    };
    
    let purchasingEnabled = Object.keys(updatedIngredients).reduce((arr, el) => {return arr + updatedIngredients[el]}, 0) <= 0 ? false : true;
    this.setState({
      ...this.state,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable: purchasingEnabled
    });
  };

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ings={this.state.ingredients}
          orderDisabled={!this.state.purchasable}
          purchasing={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
