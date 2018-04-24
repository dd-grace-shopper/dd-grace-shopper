import axios from 'axios';
import { resetCart } from './cart';
export const POST_ORDER = 'POST_ORDER';
export const GET_ORDER = 'GET_ORDER';
export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';

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

export const getAllOrders = function(orders) {
  return {
    type: GET_ALL_ORDERS,
    orders
  };
};

export const createOrder = (card, history) => dispatch => {
  return axios
    .post('/api/past-orders', card)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(postOrders(orderFromDb));
      history.push('/confirmation');
    })
    .catch(err => console.log(err));
};

export const fetchOrder = id => dispatch => {
  return axios
    .get(`/api/past-orders/${id}`)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(getOrder(orderFromDb));
    })
    .catch(err => console.log(err));
};

export const fetchAllOrders = () => dispatch => {
  return axios
    .get(`/api/past-orders/`)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(getAllOrders(orderFromDb));
    })
    .catch(err => console.log(err));
};

export default function(state = {}, action) {
  switch (action.type) {
    case POST_ORDER:
      return action.order;
    case GET_ORDER:
      return action.order;
    case GET_ALL_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
