import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { Input } from 'semantic-ui-redux-form-fields';
import { Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './StripeCheckoutForm';
import StatesDropdown from './StatesDropdown';
import CountriesDropdown from './CountriesDropdown';

export default class CartCheckout extends Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default () => (
  <form className="ui form">
    <h4 className="ui dividing header">Shipping Information</h4>

    <div className="field">
      <label>Name</label>
      <div className="two fields">
        <div className="field">
          <input type="text" name="shipping[first-name]" placeholder="First Name" />
        </div>
        <div className="field">
          <input type="text" name="shipping[last-name]" placeholder="Last Name" />
        </div>
      </div>
    </div>
    <div className="field">
      <label>Billing Address</label>
      <div className="fields">
        <div className="twelve wide field">
          <input type="text" name="shipping[address]" placeholder="Street Address" />
        </div>
        <div className="four wide field">
          <input type="text" name="shipping[address-2]" placeholder="Apt #" />
        </div>
      </div>
    </div>
    <div className="two fields">
      <StatesDropdown />
      <CountriesDropdown />
    </div>
  </form>
);
