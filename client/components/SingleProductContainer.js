import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import { fetchProducts, getProducts } from '../store/allproducts';

const mapState = function(state, ownProps) {
  return {
    product: state.products.productsById
      ? state.products.productsById[ownProps.match.params.id]
      : {}
  };
};

const mapDispatch = function(dispatch) {
  return {
    getAllProducts: function() {
      dispatch(fetchProducts());
    }
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
