import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: UPDATE_USER, user });
const deleteUser = () => ({ type: DELETE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err));

export const auth = (obj, method) => dispatch => {
  return axios
    .post(`/auth/local/${method}`, obj)
    .then(
      res => {
        dispatch(getUser(res.data));
        history.push('/home');
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));
};

export const logout = () => dispatch =>
  axios
    .post('/auth/logout')
    .then(_ => {
      dispatch(removeUser());
      history.push('/home');
    })
    .catch(err => console.log(err));

export const updateUserThunk = (user, id) => dispatch => {
  return axios
    .put(`/api/users/${id}`, user)
    .then(res => res.data)
    .then(updatedUser => {
      dispatch(updateUser(updatedUser))
      history.push('/account');
    })
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));
}

export const deleteUserThunk = (id) => dispatch =>
  axios
    .delete(`/api/users/${id}`)
    .then(_ => {
      dispatch(deleteUser());
      history.push('/home');
    })
    .catch(err => console.log(err));


/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case UPDATE_USER:
      return action.user
    case DELETE_USER:
      return defaultUser;
    default:
      return state;
  }
}
