const ADD_TO_CART = 'ADD_TO_CART';
// const GET_CART = 'GET_CART';

export function addToCart (product) {
  const action = { type: ADD_TO_CART, product };
  return action;
}

// initialized to object. need to check what 'single product' looks like
export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {product: action.product});
     default:
      return state;
  }
}
