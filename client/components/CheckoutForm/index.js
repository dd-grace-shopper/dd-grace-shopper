import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { Input } from 'semantic-ui-redux-form-fields';
import { Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './StripeCheckoutForm';

export default class CartCheckout extends Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}
