import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome } from './components';
import { me } from './store';
import AllProductsContainer from './components/AllProductsContainer';
import SingleProductContainer from './components/SingleProductContainer';
import ViewCartContainer from './components/ViewCartContainer';
import UserAccount from './components/UserAccount';
import EditUserAccountContainer from './components/EditUserAccountContainer';
import Checkout from './components/CheckoutForm';
import CheckoutForm from './components/CheckoutForm';
import { fetchCart } from './store/cart';
import { fetchProducts } from './store/allproducts';


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log('logged in?', isLoggedIn);
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/products" component={AllProductsContainer} />
        <Route path="/products/:id" component={SingleProductContainer} />
        <Route exact path="/view-cart" component={ViewCartContainer} />
        <Route path="/checkout" component={Checkout} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/account" component={UserAccount} />
            <Route
              path="/account/edit"
              render={() => <EditUserAccountContainer id={this.props.userId} />}
            />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(fetchProducts());
      dispatch(fetchCart());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
