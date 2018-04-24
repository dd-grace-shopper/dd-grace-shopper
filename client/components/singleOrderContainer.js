import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../store/pastOrders';
import { getQuanitity } from '../store/itemsPurchased';
import { deleteAssociatedProductsFromActiveOrder } from '../store/cart';
import singleOrder from './singleOrder';

const mapState = function(state, ownProps) {
  return {
    order: state.pastOrders,
    itemsPurchased: state.itemsPurchased
  };
};

const mapDispatch = function(dispatch) {
  return {
    confirmationOrder: function(id) {
      dispatch(fetchOrder(id));
    }
  };
};

export default connect(mapState, mapDispatch)(singleOrder);
