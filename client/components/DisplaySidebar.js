import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { displaySidebar } from '../store/sidebar';
import { connect } from 'react-redux';

export function DisplaySidebar (props) {

  const { handleClick } = props;

  return (
    <Button type="click" onClick={handleClick}>Filter Products</Button>
  )
}

const mapDispatch = function(dispatch) {
  return {
    handleClick: function(evt) {
      evt.preventDefault();
      dispatch(displaySidebar());
    }
  };
};

export default connect(null, mapDispatch)(DisplaySidebar);
