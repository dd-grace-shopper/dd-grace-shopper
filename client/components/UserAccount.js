import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUserThunk } from '../store/user';

export const UserAccount = props => {

  const id = props.id;

  return (
    <div>
      <h1>My Account</h1>
      <h3>{props.fullname}</h3>
      <h3>{props.email}</h3>
      <Link to="/account/edit"><h4>Edit my account details</h4></Link>
      <Link to="/view-cart"><h4>View my cart</h4></Link>
      <Link to="/past-orders"><h4>View my past orders</h4></Link>
      <button onClick={(evt) => props.handleClick(evt, id)} >Delete my account</button>
    </div>
  );
}

const mapState = state => {
  return {
    fullname: state.user.fullname,
    email: state.user.email,
    id: state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick (evt, id) {
      evt.preventDefault();
      let confirmDelete = confirm("Are you sure you want to delete your account? We'll miss you!");
      if(confirmDelete) {
        dispatch(deleteUserThunk(id));
      }
    }
  }
}

export default connect(mapState, mapDispatch)(UserAccount);

