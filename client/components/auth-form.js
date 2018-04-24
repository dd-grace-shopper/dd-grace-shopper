import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';

/**
 * COMPONENT
 */
export const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' && (
          <div>
            <div>
              <label htmlFor="firstname">
                <small>First Name</small>
              </label>
              <input name="firstname" type="text" />
            </div>
            <div>
              <label htmlFor="lastname">
                <small>Last Name</small>
              </label>
              <input name="lastname" type="text" />
            </div>
          </div>
        )}
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button className="ui button" type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div className="oauth-options">
        <a href="/auth/google">{displayName} with Google</a>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      let userObj;
      if (formName === 'signup') {
        const firstname = evt.target.firstname.value;
        const lastname = evt.target.lastname.value;
        userObj = {
          firstname,
          lastname,
          email,
          password
        };
      } else if (formName === 'login') {
        userObj = {
          email,
          password
        };
      }
      dispatch(auth(userObj, formName));
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
