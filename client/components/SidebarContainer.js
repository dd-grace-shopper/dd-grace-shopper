import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarLeft from './Sidebar';
import { fetchProducts, getProducts } from '../store/allproducts';
import {selectFilter, deselectFilter, resetSidebar} from '../store/sidebarFilter';

const makeSidebarFilter = type => {
  return (products, productsById) => {
    const sidebarFilter = products.length && products.map(id => {
      const product = productsById[id];
      switch (type) {
        case 'category':
          return product.category.category;
        case 'size':
          return product.size.mililiter;
        case 'price':
          return product.priceRange;
        default:
          return product;
      }
    });
    return Array.from(new Set(sidebarFilter)).sort();
  }
}

const mapState = state => {
  const { products, productsById } = state.products;
  return {
    products,
    productsById,
    visible: state.sidebarReducer,
    filter: state.filterReducer,
    uniqueCategoriesForSidebar: makeSidebarFilter('category')(products, productsById),
    uniqueSizesForSidebar: makeSidebarFilter('size')(products, productsById),
    uniquePricesForSidebar: makeSidebarFilter('price')(products, productsById)
  }
}

const mapDispatch = dispatch => {
  return {
    handleChange: function(evt) {
      if (evt.target.checked) {
        dispatch(selectFilter(evt.target.value))
      }
      else {
        dispatch(deselectFilter(evt.target.value))
      }
    },
    handleClick: function(evt) {
      evt.preventDefault();
      dispatch(resetSidebar());
    },
    getAllProducts: function() {
      dispatch(fetchProducts());
    },
    resetSidebarFilters: function() {
      dispatch(resetSidebar());
    },
  }
}

export default connect(mapState, mapDispatch)(SidebarLeft);
