import axios from 'axios';

//action types
export const GET_PRODUCTS = 'GET_PRODUCTS';

//action creators
export const getProducts = products => ({ type: GET_PRODUCTS, products });

//thunk creators
export const fetchProducts = () => dispatch => {
  return axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => {
      dispatch(getProducts(products));
    })
    .catch(err => console.log(err));
};

//reducer
const initialState = {
  products: {
    productsById: {},
    products: []
  }
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
