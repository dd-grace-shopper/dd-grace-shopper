import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, getProducts } from '../store/allproducts';
import {AllProducts} from './AllProducts';

const mapState = function(state) {
  return {
    products: state.products.products,
    productsById: state.products.productsById,
    sidebarVisible: state.sidebarReducer,
    filter: state.filterReducer
  };
};

export default connect(mapState)(AllProducts);
