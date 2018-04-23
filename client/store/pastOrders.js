import axios from 'axios';

export const POST_ORDER = 'POST_ORDER';

export const postOrders = function(order) {
  return {
    type: POST_ORDER,
    order
  };
};

export const createOrder = card => dispatch => {
  return axios
    .post('/api/past-orders', card)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(postOrders(orderFromDb));
    });
};

export default function(state = {}, action) {
  switch (action.type) {
    case POST_ORDER:
      return action.order;
    default:
      return state;
  }
}
