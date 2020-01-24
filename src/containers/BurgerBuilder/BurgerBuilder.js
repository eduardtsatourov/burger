import React, { Component } from "react";
import Aux from "../../hoc/AuxHoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 1.3,
  meat: 0.3
};

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false
    };
    this.getIngredientsAndPrice()

  }
  getIngredientsAndPrice = () => {
    axios
      .get("/burgerStart.json")
      .then(resp => {
        console.log(resp);
        this.setState({
          ...this.state,
          ingredients: resp.data.ingredients,
          totalPrice: resp.data.startPrice,
          purchasable: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount
    };

    let purchasingEnabled =
      Object.keys(updatedIngredients).reduce((arr, el) => {
        return arr + updatedIngredients[el];
      }, 0) <= 0
        ? false
        : true;
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

    let purchasingEnabled =
      Object.keys(updatedIngredients).reduce((arr, el) => {
        return arr + updatedIngredients[el];
      }, 0) <= 0
        ? false
        : true;
    this.setState({
      ...this.state,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable: purchasingEnabled
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    this.setState({
      ...this.state,
      loading: true
    });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice
    };

    axios
      .post("/orders.json", order)
      .then(resp => {
        console.log(resp);
        this.setState({
          ...this.state,
          loading: false,
          purchasing: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          loading: false,
          purchasing: false
        });
      });
  };

  clearIngState = () => {
    this.getIngredientsAndPrice()
  }

  render() {
    const OrderSummaryOrSpinner =
      this.state.loading || this.state.ingredients === null ? (
        <Spinner />
      ) : (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancel={this.purchaseCancelHandler}
          accept={this.purchaseContinue}
          price={this.state.totalPrice}
        />
      );
    return (
      <Aux>
        <Modal show={this.state.purchasing} click={this.purchaseCancelHandler}>
          {OrderSummaryOrSpinner}
        </Modal>

        {this.state.ingredients ? (
          <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              price={this.state.totalPrice}
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              ings={this.state.ingredients}
              orderDisabled={!this.state.purchasable}
              purchasing={this.purchaseHandler}
              clear={this.clearIngState}
            />
          </Aux>
        ) : <Aux>
              <p style={{textAlign: "center"}}>Please try again later, it looks like the server is sleeping...</p>
              <Spinner />
            </Aux>
            }
      </Aux>
    );
  }
}

export default BurgerBuilder;
