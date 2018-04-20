import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllProducts from './AllProducts';

const mapState = function(state) {
  return {
    products: state.products.products,
    productsById: state.products.productsById,
  };
};

export default connect(mapState)(AllProducts);
