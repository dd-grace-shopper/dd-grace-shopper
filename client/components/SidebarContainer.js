import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SidebarLeft} from './Sidebar';
import {selectFilter} from '../store/sidebarFilter';

const mapState = state => {
  return {
    visible: state.sidebarReducer
  }
}

const mapDispatch = dispatch => {
  return {
    onChange: function(evt) {
      evt.preventDefault();
      dispatch(selectFilter(evt.target.value))
    }
  }
}

export default connect(mapState, mapDispatch)(SidebarLeft);
