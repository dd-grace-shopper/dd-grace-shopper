import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const UserAccount = props => {

  return (
    <div>
      <h1>My Account</h1>
      <h3>{props.fullname}</h3>
      <h3>{props.email}</h3>
      <Link to="/account/edit"><h4>Edit my account details</h4></Link>
      <Link to="/view-cart"><h4>View my cart</h4></Link>
      <Link to="/past-orders"><h4>View my past orders</h4></Link>
      <Link to="/"><h4>Delete my account</h4></Link>
    </div>
  );
}

const mapState = state => {
  return {
    fullname: state.user.fullname,
    email: state.user.email
  };
};

export default connect(mapState)(UserAccount);

