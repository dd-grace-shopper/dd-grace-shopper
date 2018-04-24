import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../store/pastOrders';
import { getQuanitity } from '../store/itemsPurchased';
import { deleteAssociatedProductsFromActiveOrder } from '../store/cart';
import OrderConfirmation from './OrderConfirmation';

const mapState = function(state, ownProps) {
  return {
    order: state.pastOrders,
    cart: state.cart,
    itemsPurchased: state.itemsPurchased
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
    createPurchasedItemsObj: cart => {
      dispatch(getQuanitity(cart));
    }
  };
};

export default connect(mapState, mapDispatch)(OrderConfirmation);
