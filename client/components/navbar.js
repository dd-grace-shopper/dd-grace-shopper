import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { resetCart} from  '../store/cart';
import UserHome from './user-home';
import { Icon } from 'semantic-ui-react';
import Notifications, {notify} from 'react-notify-toast';
//className="ui top attached header"
export const Navbar = ({ handleClick, isLoggedIn, numItems }) => (
  <div>
  <div id = "fixedbar">
    <div className ="header-welcome">
      <div className="head">
        <h1 >D & D Wine and Liquor</h1>
      </div>
      <div className="welcome">
      {isLoggedIn && <UserHome />}
      </div>
    </div>
    <Notifications />
    <nav className="navbar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">All Products</Link>
          <Link to="/view-cart">View Cart
            <span>
            <Icon name='add to cart' size='big' /> </span>
            <span> {`(${numItems} Items)`}
            </span>
          </Link>
          <Link to="/account">My Account</Link>
          <Link to="/view-cart">View Cart
          <span>
            <Icon name='add to cart' size='big' /> </span>
            <span> {`(${numItems} Items)`}
            </span>
          </Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <br />
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/products">All Products</Link>
          <Link to="/view-cart">View Cart
          <span>
          <Icon name='add to cart' size='big' /> </span>
          <span> {`(${numItems} Items)`}
          </span>
          </Link>
        </div>
      )}
    </nav>
  </div>
  <div className="spacer">
    &nbsp;
  </div>

  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  let numItems = 0;
  Object.keys(state.cart).forEach(productId => {
    const { quantity } = state.cart[productId];
    numItems += quantity;});
    return {
      isLoggedIn: !!state.user.id,
      numItems
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
