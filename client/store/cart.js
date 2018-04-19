import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(order) {
  const action = {
    type: ADD_TO_CART,
    order
  };
  return action;
}

export const postToCart = (productId) => dispatch => {
  return axios
    .post('/api/active-orders', { productId })
    .then(res => res.data)
    .then(order => {
      const action = addToCart(order);
      dispatch(action);
    });
};

export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, action.order)
    default:
      return state;
  }
}
