import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllProducts from './AllProducts';
import { fetchProducts, getProducts } from '../store/allproducts';

const mapState = function(state) {
  return {
    products: state.products.products,
    productsById: state.products.productsById
  };
};

const mapDispatch = function(dispatch) {
  return {
    getAllProducts: function() {
      dispatch(fetchProducts());
    }
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
