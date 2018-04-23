import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { resetCart} from  '../store/cart';
import UserHome from './user-home';
import { Icon } from 'semantic-ui-react'

export const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1 className="ui top attached header">D & D Wine and Liquor</h1>
    <nav className="navbar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">All Products</Link>
          <Link to="/view-cart">View Cart</Link>
          <Link to="/account">My Account</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <UserHome />
          <br />
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          {
            window.location.pathname !== '/home'
            &&
            <Link to="/login">Login</Link>
          }
          <Link to="/signup">Sign Up</Link>
          <Link to="/products">All Products</Link>
          <Link to="/view-cart">View Cart
          <Icon name="shopping cart" size="big" />
          </Link>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
      dispatch(resetCart());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
