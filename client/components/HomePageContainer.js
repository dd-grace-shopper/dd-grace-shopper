import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, getProducts } from '../store/allproducts';
import HomePage from './HomePage'

const mapState = state => {
  return {
    products: state.products.products,
    productsById: state.products.productsById
  }
}

const mapDispatch = function(dispatch) {
  return {
    getAllProducts: function() {
      dispatch(fetchProducts());
    }
  };
};

export default connect(mapState, mapDispatch)(HomePage);
