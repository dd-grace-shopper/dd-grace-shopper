import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditUserAccount } from './EditUserAccount';
import { updateUserThunk } from '../store/user';

const mapState = function(state, ownProps) {
  return {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    email: state.user.email,
    id: state.user.id
  };
};

const mapDispatch = function(dispatch, ownProps) {
  return {
    handleSubmit (evt) {
      evt.preventDefault();
      const id = ownProps.id;
      const firstname = evt.target.firstname.value;
      const lastname = evt.target.lastname.value;
      const email = evt.target.email.value;
      const user = {firstname, lastname, email};

      dispatch(updateUserThunk(user, id));
    }
  };
};

export default connect(mapState, mapDispatch)(EditUserAccount);
