import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllOrders } from '../store/pastOrders';
import myOrders from './myOrders';

const mapState = function(state, ownProps) {
  return {
    orders: state.pastOrders
  };
};

const mapDispatch = function(dispatch) {
  return {
    getAllPastOrders: function() {
      dispatch(fetchAllOrders());
    }
  };
};

export default connect(mapState, mapDispatch)(myOrders);
