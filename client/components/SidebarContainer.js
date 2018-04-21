import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SidebarLeft} from './Sidebar';
import {selectFilter, deselectFilter} from '../store/sidebarFilter';

const mapState = state => {
  return {
    visible: state.sidebarReducer,
    products: state.products.products,
    productsById: state.products.productsById,
  }
}

const mapDispatch = dispatch => {
  return {
    onChange: function(evt) {
      if(evt.target.checked) {
        dispatch(selectFilter(evt.target.value))
      }
      else {
        dispatch(deselectFilter(evt.target.value))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(SidebarLeft);
