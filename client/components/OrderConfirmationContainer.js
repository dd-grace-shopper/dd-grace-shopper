import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../store/pastOrders';
import { deleteAssociatedProductsFromActiveOrder } from '../store/cart';
import OrderConfirmation from './OrderConfirmation';

const mapState = function(state, ownProps) {
  return {
    order: state.pastOrders,
    cart: state.cart
  };
};

const mapDispatch = function(dispatch) {
  return {
    confirmationOrder: function(id) {
      dispatch(fetchOrder(id));
    },
    removeOrderedProductsFromCart: function(cart) {
      const itemsToDelete = Object.keys(cart);
      dispatch(deleteAssociatedProductsFromActiveOrder(itemsToDelete));
    },
    createPurchasedItemsObj: () => {}
  };
};


export default connect(mapState, mapDispatch)(OrderConfirmation);
