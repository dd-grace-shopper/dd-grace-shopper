import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store, { auth } from '../store';
import {
  handleAuthFormInputChange,
  resetForm
} from '../store/formValidations';

/**
 * COMPONENT
 */
export class AuthForm extends Component {
  componentWillUnmount() {
    store.dispatch(resetForm());
  }

  render() {
    const { name, displayName, handleChange, handleSubmit, error, formData } = this.props;
    const { dirty, warnings } = formData;
    const { firstNameWarning, lastNameWarning, passwordWarning, emailWarning } = warnings;

    return (
      <div className="auth-form">
        <form onSubmit={handleSubmit} name={name}>
          {name === 'signup' && (
            <div>
              <div>
                <label htmlFor="firstname">
                  <small>First Name</small>
                </label>
                <input
                  name="firstname"
                  type="text"
                  onChange={event => handleChange({ firstName: event.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastname">
                  <small>Last Name</small>
                </label>
                <input
                  name="lastname"
                  type="text"
                  onChange={event => handleChange({ lastName: event.target.value })}
                />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input
              name="email"
              type="text"
              onChange={event => handleChange({ email: event.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input
              name="password"
              type="password"
              onChange={event => handleChange({ password: event.target.value })}
            />
          </div>
          <div>
            <button
              className="ui button"
              type="submit"
              disabled={emailWarning.on || firstNameWarning.on || lastNameWarning.on || passwordWarning.on || !dirty}
            >
              {displayName}
            </button>
          </div>
          {
            [emailWarning, firstNameWarning, lastNameWarning, passwordWarning].map(warn => {
              if (dirty && warn.on) {
                return (
                  <p className="formValidationError" key={warn.message}>
                    {warn.message}
                  </p>
                );
              }
            })
          }
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <div className="oauth-options">
          <a href="/auth/google">{displayName} with Google</a>
          {/*<a href="/auth/facebook">{displayName} with Facebook</a>*/}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div className="oauth-options">
        <a href="/auth/google">{displayName} with Google</a>

      </div>
    );
  }
}

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
    formData: state.formData.authFormData,
    error: state.user.error
  };
};

const mapSignup = state => {

  return {
    name: 'signup',
    displayName: 'Sign Up',
    formData: state.formData.authFormData,
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
    },
    handleChange(inputFieldAndValue) {
      dispatch(handleAuthFormInputChange(inputFieldAndValue));
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
