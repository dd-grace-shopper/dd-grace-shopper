import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart';

export function AddToCart (props) {

  console.log('PROPS!!!!', props.handleClick)
  const { product } = props

  return (
    <div>
      <button type="click" onClick={() => console.log(props)} >Add to cart</button>
    </div>
  )
}

const mapState = function(state) {
  return {
    product: state.product
  }
}

const mapDispatch = function(dispatch) {
  return {
    handleClick: function(product) {
      console.log('click handled!!!')

      // dispatch(addToCart(product));
    }
  }
}

export default connect(mapState, mapDispatch)(AddToCart);
