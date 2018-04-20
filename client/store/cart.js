import axios from 'axios';

// types
const CREATE_CART = 'CREATE_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_ITEM_IN_CART = 'UPDATE_ITEM_IN_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

// action creators
export function createCart(newCart) {
  const action = {
    type: CREATE_CART,
    newCart
  }
  return action;
}

export function addToCart(order) {
  const action = {
    type: ADD_TO_CART,
    order
  };
  return action;
}

export function updateItemInCart(item) {
  const action = {
    type: UPDATE_ITEM_IN_CART,
    item
  }
  return action;
}

export function deleteFromCart(productId) {
  const action = {
    type: DELETE_FROM_CART,
    productId
  }
  return action;
}


// thunk creators
export const fetchCart = () => dispatch => {
  return axios
  .get('/api/active-orders')
  .then(res => res.data)
  .then(cartFromDb => {
    const newCart = cartFromDb.reduce((newCartObj, item) => {
      const { productId, quantity } = item;
      newCartObj[productId] = { productId, quantity };
      return newCartObj;
    }, {});
    const action = createCart(newCart);
    dispatch(action);
  });
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

export const updateProductQuantity = (productId, newQuantity) => dispatch => {
  return axios
    .put(`/api/active-orders/${productId}`, { newQuantity })
    .then(res => res.data)
    .then(updatedItem => {
      const action = updateItemInCart(updatedItem);
      dispatch(action);
    });
}

export const deleteProductFromCart = productId => dispatch => {
  return axios
    .delete(`/api/active-orders/${productId}`)
    .then(() => {
      const action = deleteFromCart({ productId });
      dispatch(action);
    });
};


// reducer
export default function cart(state = {}, action) {
  switch (action.type) {
    case CREATE_CART:
      return action.newCart;
    case ADD_TO_CART:
      return Object.assign({}, state, action.order);
    case UPDATE_ITEM_IN_CART:
      return Object.assign({}, state, action.item);
    case DELETE_FROM_CART:
      return Object.keys(state).reduce((newCart, itemId) => {
        if (+itemId !== +action.productId.productId) {
          newCart[itemId] = state[itemId];
        }
        return newCart;
      }, {});
    default:
      return state;
  }
}
