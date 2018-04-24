/* eslint-disable */
import axios from 'axios';
import initialState from './formValidationUtils';

// types
export const INIT_FORM = 'INIT_FORM';
export const HANDLE_AUTH_FORM_INPUT_CHANGE = 'HANDLE_AUTH_FORM_INPUT_CHANGE';
export const HANDLE_CHECKOUT_FORM_INPUT_CHANGE = 'HANDLE_CHECKOUT_FORM_INPUT_CHANGE';
export const RESET_FORM = 'RESET_FORM';

export function initForm() {
  return { type: INIT_FORM };
}
export function handleAuthFormInputChange(inputFieldAndValue) {
  return { type: HANDLE_AUTH_FORM_INPUT_CHANGE, inputFieldAndValue };
}
export function handleCheckoutFormInputChange(inputFieldAndValue) {
  return { type: HANDLE_CHECKOUT_FORM_INPUT_CHANGE, inputFieldAndValue };
}
export function resetForm() {
  return { type: RESET_FORM };
}

// thunk creators
/// none, as forms are being submitted through different avenues.
/// this file is a place to set up presentational form validations.

// reducer
export default (state = initialState, { type, inputFieldAndValue }) => {
  let firstName, lastName, email, password, address, city, usState, country;
  let firstNameWarning, lastNameWarning, passwordWarning, emailWarning, addressWarning, cityWarning, usStateWarning, countryWarning;
  switch (type) {
    case INIT_FORM:
      return initialState;
    case HANDLE_AUTH_FORM_INPUT_CHANGE:
      const authDirty = state.authFormData.dirty;
      const authInputValues = state.authFormData.inputValues;
      const authWarnings = state.authFormData.warnings;
      firstName = authInputValues.firstName;
      lastName = authInputValues.lastName;
      email = authInputValues.email;
      password = authInputValues.password;
      firstNameWarning = authWarnings.firstNameWarning;
      lastNameWarning = authWarnings.lastNameWarning;
      passwordWarning = authWarnings.passwordWarning;
      emailWarning = authWarnings.emailWarning;
      const authInputField = Object.keys(inputFieldAndValue)[0];
      const authInputValue = inputFieldAndValue[authInputField];
      let authWarningStatus;

      switch(authInputField) {
        case 'firstName':
          authWarningStatus = firstNameWarning.condition(authInputValue, authDirty);
          return Object.assign({}, state, {
            authFormData: {
              dirty: true,
              inputValues: {
                firstName: authInputValue,
                lastName, email, password
              },
              warnings: {
                firstNameWarning: {
                  message: firstNameWarning.message,
                  on: authWarningStatus,
                  condition: firstNameWarning.condition
                },
                lastNameWarning, emailWarning, passwordWarning
              }
            }
          });
        case 'lastName':
          authWarningStatus = lastNameWarning.condition(authInputValue, authDirty);
          return Object.assign({}, state, {
            authFormData: {
              dirty: true,
              inputValues: {
                lastName: authInputValue,
                firstName, email, password
              },
              warnings: {
                lastNameWarning: {
                  message: lastNameWarning.message,
                  on: authWarningStatus,
                  condition: lastNameWarning.condition
                },
                firstNameWarning, emailWarning, passwordWarning
              }
            }
          });
        case 'email':
          authWarningStatus = emailWarning.condition(authInputValue);
          return Object.assign({}, state, {
            authFormData: {
              dirty: true,
              inputValues: {
                email: authInputValue,
                firstName, lastName, password
              },
              warnings: {
                emailWarning: {
                  message: emailWarning.message,
                  on: authWarningStatus,
                  condition: emailWarning.condition
                },
                firstNameWarning, lastNameWarning, passwordWarning
              }
            }
          });
        case 'password':
          authWarningStatus = passwordWarning.condition(authInputValue, authDirty);
          return Object.assign({}, state, {
            authFormData: {
              dirty: true,
              inputValues: {
                password: authInputValue,
                firstName, lastName, email
              },
              warnings: {
                passwordWarning: {
                  message: passwordWarning.message,
                  on: authWarningStatus,
                  condition: passwordWarning.condition
                },
                firstNameWarning, lastNameWarning, emailWarning
              }
            }
          });
        default:
          return state;
      }

    case HANDLE_CHECKOUT_FORM_INPUT_CHANGE:
      const checkoutDirty = state.checkoutFormData.dirty;
      const checkoutInputValues = state.checkoutFormData.inputValues;
      const checkoutWarnings = state.checkoutFormData.warnings;

      let { firstNameWarning, lastNameWarning, addressWarning, cityWarning, usStateWarning, countryWarning } = checkoutWarnings;
      firstName = checkoutInputValues.firstName;
      lastName = checkoutInputValues.lastName;
      address = checkoutInputValues.address;
      city = checkoutInputValues.city;
      usState = checkoutInputValues.usState;
      country = checkoutInputValues.country;
      firstNameWarning = checkoutWarnings.firstNameWarning;
      lastNameWarning = checkoutWarnings.lastNameWarning;
      addressWarning = checkoutWarnings.addressWarning;
      cityWarning = checkoutWarnings.cityWarning;
      usStateWarning = checkoutWarnings.usStateWarning;
      countryWarning = checkoutWarnings.countryWarning;
      const checkoutInputField = Object.keys(inputFieldAndValue)[0];
      const checkoutInputValue = inputFieldAndValue[checkoutInputField];
      let checkoutWarningStatus;

      switch(checkoutInputField) {
        case 'firstName':
          checkoutWarningStatus = firstNameWarning.condition(checkoutInputValue, checkoutDirty);
          return Object.assign({}, state, {
            checkoutFormData: {
              dirty: true,
              inputValues: {
                firstName: checkoutInputValue,
                lastName, address, city, usState, country
              },
              warnings: {
                firstNameWarning: {
                  message: firstNameWarning.message,
                  on: checkoutWarningStatus,
                  condition: firstNameWarning.condition
                },
                lastNameWarning, addressWarning, cityWarning, usStateWarning, countryWarning
              }
            }
          });
        case 'lastName':
          checkoutWarningStatus = lastNameWarning.condition(checkoutInputValue, checkoutDirty);
          return Object.assign({}, state, {
            checkoutFormData: {
              dirty: true,
              inputValues: {
                lastName: checkoutInputValue,
                firstName, address, city, usState, country
              },
              warnings: {
                lastNameWarning: {
                  message: lastNameWarning.message,
                  on: checkoutWarningStatus,
                  condition: lastNameWarning.condition
                },
                firstNameWarning, addressWarning, cityWarning, usStateWarning, countryWarning
              }
            }
          });
        case 'address':
          checkoutWarningStatus = addressWarning.condition(checkoutInputValue);
          console.log('CHECKOUT WARNING STATUS FOR ADDRESS', checkoutWarningStatus);
          return Object.assign({}, state, {
            checkoutFormData: {
              dirty: true,
              inputValues: {
                address: checkoutInputValue,
                firstName, lastName, city, usState, country
              },
              warnings: {
                addressWarning: {
                  message: addressWarning.message,
                  on: checkoutWarningStatus,
                  condition: addressWarning.condition
                },
                firstNameWarning, lastNameWarning, cityWarning, usStateWarning, countryWarning
              }
            }
          });
        case 'city':
          checkoutWarningStatus = cityWarning.condition(checkoutInputValue, checkoutDirty);
          console.log('CHECKOUT WARNING STATUS FOR CITY', checkoutWarningStatus);
          return Object.assign({}, state, {
            checkoutFormData: {
              dirty: true,
              inputValues: {
                city: checkoutInputValue,
                firstName, lastName, address, usState, country
              },
              warnings: {
                cityWarning: {
                  message: cityWarning.message,
                  on: checkoutWarningStatus,
                  condition: cityWarning.condition
                },
                firstNameWarning, lastNameWarning, addressWarning, usStateWarning, countryWarning
              }
            }
          });
        case 'usState':
          return Object.assign({}, state, {
            checkoutFormData: {
              dirty: true,
              inputValues: {
                usState: checkoutInputValue,
                firstName, lastName, address, city, country
              },
              warnings: checkoutWarnings
            }
          });
        case 'country':
          return Object.assign({}, state, {
            checkoutFormData: {
              dirty: true,
              inputValues: {
                country: checkoutInputValue,
                firstName, lastName, address, city, usState
              },
              warnings: checkoutWarnings
            }
          });
        default:
          return state;
      }
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}
