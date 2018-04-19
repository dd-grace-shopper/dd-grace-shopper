import React from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { Input } from 'semantic-ui-redux-form-fields';
import StatesDropdown from './StatesDropdown';
import CountriesDropdown from './CountriesDropdown';

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

  {/*
  <h4 className="ui dividing header">Billing Information</h4>
  <div className="field">
    <label>Card Type</label>
    <div className="ui selection dropdown">
      <input type="hidden" name="card[type]">
      <div className="default text">Type</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item" data-value="visa">
          <i className="visa icon"></i>
          Visa
        </div>
        <div className="item" data-value="amex">
          <i className="amex icon"></i>
          American Express
        </div>
        <div className="item" data-value="discover">
          <i className="discover icon"></i>
          Discover
        </div>
      </div>
    </div>
  </div>
  <div className="fields">
    <div className="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #">
    </div>
    <div className="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC">
    </div>
    <div className="six wide field">
      <label>Expiration</label>
      <div className="two fields">
        <div className="field">
          <select className="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="field">
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year">
        </div>
      </div>
    </div>
  </div>
  <h4 className="ui dividing header">Receipt</h4>
  <div className="field">
    <label>Send Receipt To:</label>
    <div className="ui fluid multiple search selection dropdown">
      <input type="hidden" name="receipt">
      <i className="dropdown icon"></i>
      <div className="default text">Saved Contacts</div>
      <div className="menu">
        <div className="item" data-value="jenny" data-text="Jenny">
          <img className="ui mini avatar image" src="/images/avatar/small/jenny.jpg">
          Jenny Hess
        </div>
        <div className="item" data-value="elliot" data-text="Elliot">
          <img className="ui mini avatar image" src="/images/avatar/small/elliot.jpg">
          Elliot Fu
        </div>
        <div className="item" data-value="stevie" data-text="Stevie">
          <img className="ui mini avatar image" src="/images/avatar/small/stevie.jpg">
          Stevie Feliciano
        </div>
        <div className="item" data-value="christian" data-text="Christian">
          <img className="ui mini avatar image" src="/images/avatar/small/christian.jpg">
          Christian
        </div>
        <div className="item" data-value="matt" data-text="Matt">
          <img className="ui mini avatar image" src="/images/avatar/small/matt.jpg">
          Matt
        </div>
        <div className="item" data-value="justen" data-text="Justen">
          <img className="ui mini avatar image" src="/images/avatar/small/justen.jpg">
          Justen Kitsune
        </div>
      </div>
    </div>
  </div>
  <div className="ui segment">
    <div className="field">
      <div className="ui toggle checkbox">
        <input type="checkbox" name="gift" tabindex="0" className="hidden">
        <label>Do not include a receipt in the package</label>
      </div>
    </div>
  </div>
  */}
  <div className="ui button" tabindex="0">Submit Order</div>
  </form>
);
