import axios from 'axios';
import { resetCart } from './cart';
export const POST_ORDER = 'POST_ORDER';
export const GET_ORDER = 'GET_ORDER';

export const postOrders = function(order) {
  return {
    type: POST_ORDER,
    order
  };
};

export const getOrder = function(order) {
  return {
    type: GET_ORDER,
    order
  };
};

export const createOrder = (card, history) => dispatch => {
  return axios
    .post('/api/past-orders', card)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(postOrders(orderFromDb));
      history.push('/confirmation');
    });
};

export const fetchOrder = id => dispatch => {
  return axios
    .get(`/api/past-orders/${id}`)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(getOrder(orderFromDb));
      dispatch(resetCart());
    });
};

export default function(state = {}, action) {
  switch (action.type) {
    case POST_ORDER:
      return action.order;
    case GET_ORDER:
      return action.order;
    default:
      return state;
  }
}
