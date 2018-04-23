import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HomePage} from './HomePage'

const mapState = state => {
  return {
    products: state.products.products,
    productsById: state.products.productsById
  }
}

export default connect(mapState)(HomePage);
