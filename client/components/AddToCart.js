import React from 'react';
import { connect } from 'react-redux';
import { postToCart } from '../store/cart';
import Notifications, {notify} from 'react-notify-toast';

export function AddToCart(props) {

  const { handleClick } = props;

  return (
    <div>
      <button className = "ui button" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
}

const mapDispatch = function(dispatch, ownProps) {
  return {
    handleClick: function(evt) {
      evt.preventDefault();
      dispatch(postToCart(ownProps.productId));
      let myColor = { background: '#0E1717', text: '#FFFFFF' };
      notify.show('Successfully added to cart', 'custom', 1200, myColor);
    }
  };
};

export default connect(null, mapDispatch)(AddToCart);
