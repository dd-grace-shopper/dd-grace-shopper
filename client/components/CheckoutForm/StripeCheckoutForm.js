import React from 'react';
import StatesDropdown from './StatesDropdown';
import CountriesDropdown from './CountriesDropdown';
import { createOrder } from '../../store/pastOrders';
import { connect } from 'react-redux';

import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  StripeProvider,
  Elements,
  injectStripe
} from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = fontSize => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#9e2146'
      }
    }
  };
};

class _CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      state: ''
    };
  }

  handleStateChange = ev => {
    this.setState({ state: ev.target.value });
  };

  handleCountryChange = ev => {
    this.setState({ country: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(StatesDropdown);
    const firstName = ev.target.firstName.value || null;
    const lastName = ev.target.lastName.value || null;
    const name = firstName + ' ' + lastName;
    const address_line1 = ev.target.address.value || null;
    const address_city = ev.target.city.value || null;
    const address_country = this.state.country || null;
    const address_state = this.state.state || null;
    const tokenObj = {
      name,
      address_city,
      address_line1,
      address_state,
      address_country
    };
    this.props.stripe.createToken(tokenObj).then(payload => {
      const card = payload.token.card;
      this.props.addToDb(card);
    });
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className="field">
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Billing Address</label>
          <div className="fields">
            <div className="twelve wide field">
              <input type="text" name="address" placeholder="Street Address" />
            </div>
            <div className="four wide field">
              <input type="text" name="city" placeholder="City" />
            </div>
          </div>
        </div>
        <div className="two fields">
          <StatesDropdown handleStateChange={this.handleStateChange} />
          <CountriesDropdown handleCountryChange={this.handleCountryChange} />
        </div>
        <label>
          Card details
          <CardElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px'
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({ elementFontSize: '14px' });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({ elementFontSize: '18px' });
      }
    });
  }

  render() {
    console.log('checkout props!', this.props);
    const { elementFontSize } = this.state;
    return (
      <div className="Checkout">
        <Elements>
          <CardForm fontSize={elementFontSize} addToDb={this.props.addToDb} />
        </Elements>
      </div>
    );
  }
}

const mapState = function(state, ownProps) {
  return {
    order: state.order || {}
  };
};

const mapDispatch = function(dispatch) {
  return {
    addToDb: function(card) {
      dispatch(createOrder(card));
    }
  };
};

export default connect(mapState, mapDispatch)(Checkout);
