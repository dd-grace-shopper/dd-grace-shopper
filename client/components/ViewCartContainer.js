import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewCart from './ViewCart';

const mapState = function(state, ownProps) {
  return {
    products: { name: 'example wine', price: 15 }
  };
};

// const mapDispatch = function(dispatch) {

// };

export default connect(mapState)(ViewCart);
