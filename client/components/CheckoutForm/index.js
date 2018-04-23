import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { Input } from 'semantic-ui-redux-form-fields';
import InjectedCheckoutForm from './StripeCheckoutForm';
import { connect } from 'react-redux';

class CartCheckout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const total = this.props.location.state.total;
    const { history } = this.props;
    return <InjectedCheckoutForm total={total} history={history} />;
  }
}

const mapState = function(state, ownProps) {
  history: ownProps.history;
};

export default connect(mapState)(CartCheckout);
