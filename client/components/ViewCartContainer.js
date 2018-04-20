import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewCart from './ViewCart';
import { deleteProductFromCart } from '../store/cart';

const mapState = function(state, ownProps) {
  //state.cart
  //state.products.productsById
  let total = 0;
  let numItems = 0;
  const productsInCart = Object.keys(state.cart).map(productId => {
    const { name, price, imageUrl } = state.products.productsById[productId];
    const { quantity } = state.cart[productId];
    total += quantity * price;
    numItems += quantity;
    return {
      productId,
      name,
      price,
      quantity,
      imageUrl
    }
  });
  return {
    total,
    numItems,
    productsInCart
    // isLoggedIn: !!state.user.id
    };
};


const mapDispatch = function(dispatch) {
  return {
    handleDelete: (evt, id) => {
      evt.preventDefault();
      dispatch(deleteProductFromCart(id));
    }
  }
};

export default connect(mapState, mapDispatch)(ViewCart);
