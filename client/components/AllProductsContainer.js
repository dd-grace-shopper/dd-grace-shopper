import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllProducts from './AllProducts';

const mapState = function(state) {
  return {
    products: state.products
  };
};

// const mapDispatch = function(dispatch) {

// }

export default connect(mapState)(AllProducts);
