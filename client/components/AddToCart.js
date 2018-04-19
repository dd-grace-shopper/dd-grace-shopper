import React from 'react';
import { connect } from 'react-redux';
import { postToCart } from '../store/cart';

export function AddToCart(props) {

  const { handleClick } = props;
  return (
    <div>
      <button type="click" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
}

const mapState = function(state) {
  return {
    product: state.product
  };
};

const mapDispatch = function(dispatch, ownProps) {
  return {
    handleClick: function(evt) {
      evt.preventDefault();
      dispatch(postToCart(ownProps.productId));
    }
  };
};

export default connect(mapState, mapDispatch)(AddToCart);
