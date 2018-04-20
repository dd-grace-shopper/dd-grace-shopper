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
    .then(orderFromDb => {
      const order = {};
      order[orderFromDb.productId] = {};
      order[orderFromDb.productId].id = orderFromDb.productId;
      order[orderFromDb.productId].quantity = orderFromDb.quantity;
      const action = addToCart(order);
      dispatch(action);
    });
};

export const fetchCart = () => dispatch => {
  return axios
  .get('/api/active-orders')
  .then(res => res.data)

}
export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, action.order)
    default:
      return state;
  }
}
