import axios from 'axios';

//action types
const GET_PRODUCTS = 'GET_PRODUCTS';

//action creators
export const getProducts = allproducts => ({ type: GET_PRODUCTS }, allproducts);

//thunk creators
export const fetchProducts = () => dispatch =>
  axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => {
      dispatch(getProducts(products));
    })
    .catch(err => console.log(err));

//reducer
export default function(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.allproducts;
    default:
      return state;
  }
}
