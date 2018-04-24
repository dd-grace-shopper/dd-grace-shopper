const GET_QUANTITY = 'GET_QUANTITY';

export const getQuanitity = quantity => {
  return {
    type: GET_QUANTITY,
    quantity
  };
};

export default function itemsPurchased(state = {}, action) {
  switch (action.type) {
    case GET_QUANTITY:
      return action.quantity;
    default:
      return state;
  }
}
