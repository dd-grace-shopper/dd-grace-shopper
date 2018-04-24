import axios from 'axios';

export const GET_QUANTITY = 'GET_QUANTITY';

export const getQuanitity = quantity => {
  return {
    type: GET_QUANTITY,
    quantity
  };
};

export const fetchQuantityFromDb = id => dispatch => {
  return axios
    .get(`/api/past-orders/${id}/quantity`)
    .then(res => res.data)
    .then(orderFromDb => {
      dispatch(getQuanitity(orderFromDb));
    })
    .catch(err => console.log(err));
};

export default function itemsPurchased(state = [], action) {
  switch (action.type) {
    case GET_QUANTITY:
      return action.quantity;
    default:
      return state;
  }
}
