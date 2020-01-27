import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import classes from './Checkout.module.css';

class Checkout extends Component {
  state={
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese:1
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('./checkout/contact-data');
  }

  render() {
    return (
      <div className={classes.Checkout}>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
      </div>
    )
  }
}

export default Checkout;
