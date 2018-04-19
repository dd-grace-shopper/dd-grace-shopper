import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewCart from './ViewCart';

const mapState = function(state, ownProps) {
  //state.cart
  //state.products.productsById
  let total = 0;
  let numItems = 0;
  const productsInCart = Object.keys(state.cart).map(productId => {
    const { name, price } = state.products.productsById[productId];
    const { quantity } = state.cart[productId];
    total += quantity * price;
    numItems += quantity;
    return {
      productId,
      name,
      price,
      quantity
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
  // return {
  //   getActiveOrdersForUser: function(){

  //   },
  //   getActiveOrdersForNonUser: function(){

  //   }
  // }
};

export default connect(mapState)(ViewCart);
