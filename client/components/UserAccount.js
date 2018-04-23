import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUserThunk } from '../store/user';

export const UserAccount = props => {

  const {
   // via mapState
   fullname,
   email,
   id,
   // via mapDispatch
   handleClick
  } = props;

  return (
    <div>
      <h1>My Account</h1>
      <h3 className="single-account-fullname">
        {fullname}
      </h3>
      <h3 className="single-account-email">
        {email}
      </h3>
      <Link to="/account/edit"><h4>Edit my account details</h4></Link>
      <Link to="/view-cart"><h4>View my cart</h4></Link>
      <Link to="/past-orders"><h4>View my past orders</h4></Link>
      <button onClick={(evt) => handleClick(evt, id)} >Delete my account</button>
    </div>
  );
}

export const mapState = state => {
  return {
    fullname: state.user.fullname,
    email: state.user.email,
    id: state.user.id
  };
};

export const mapDispatch = dispatch => {
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

