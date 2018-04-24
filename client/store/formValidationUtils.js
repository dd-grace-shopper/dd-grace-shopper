// helper fn
export const blankFieldWarning = fieldName => {
  return {
    message: `${fieldName} field can\'t be blank.`,
    on: false,
    condition: (field, dirty) => dirty === true && field === ''
  }
}
const firstNameWarning = blankFieldWarning('First name');
const lastNameWarning = blankFieldWarning('Last name');
const passwordWarning = blankFieldWarning('Password');
const cityWarning = blankFieldWarning('City');

// default export obj
const initialState = {
  authFormData: {
    dirty: false,
    inputValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    warnings: {
      firstNameWarning,
      lastNameWarning,
      passwordWarning,
      emailWarning: {
        message: 'Email must be a valid address.',
        on: false,
        condition: email =>
          !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)  // courtesty http://emailregex.com/
      }
    }
  },
  checkoutFormData: {
    dirty: false,
    inputValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      usState: '',
      country: ''
    },
    warnings: {
      firstNameWarning,
      lastNameWarning,
      addressWarning: {
        message: 'Address must include street number and street name.',
        on: false,
        condition: address => !/\d{1,5}\s(\b\w*\b\s){1,2}\w*/.test(address)
      },
      cityWarning,
      usStateWarning: null,
      countryWarning: null
    }
  }
}

module.exports = initialState;
