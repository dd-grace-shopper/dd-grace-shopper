import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewCart from './ViewCart';
import { deleteProductFromCart, updateProductQuantity } from '../store/cart';
import {
  getDestinationInput,
  receiveDistanceFromGoogle
} from '../store/distance';

const mapState = function(state, ownProps) {
  let total = 0;
  let numItems = 0;
  if (state.cart === null){return;}
  const productsInCart = Object.keys(state.cart).map(productId => {
    const { name, price, imageUrl } = state.products.productsById[productId];
    const { quantity } = state.cart[productId];
    total += quantity * price;
    numItems += quantity;
    return {
      productId,
      name,
      price,
      quantity,
      imageUrl
    };
  });
  const destination = state.distance.destinationInput;
  const finalDistance = state.distance.receivedDistance;

  return {
    total,
    numItems,
    productsInCart,
    destination,
    finalDistance
  };
};

const mapDispatch = function(dispatch) {
  return {
    handleDelete: (evt, id) => {
      evt.preventDefault();
      dispatch(deleteProductFromCart(id));
    },
    handleUpdate: (evt, productid, quantity) => {
      evt.preventDefault();
      dispatch(updateProductQuantity(productid, quantity));
    },
    handleChange: evt => {
      evt.preventDefault();
      dispatch(getDestinationInput(evt.target.value));
    },
    handleClickDistance: (evt, destination) => {
      evt.preventDefault();
      const origin = 'New York, NY';
      const matrix = new google.maps.DistanceMatrixService();
      let distance;
      const callback = (res, status) => {
        if (status === 'OK') {
          distance = Math.floor(
            res.rows[0].elements[0].distance.value * 0.62 / 1000
          );
          dispatch(receiveDistanceFromGoogle(distance));
        }
      };
      matrix.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING
        },
        callback
      );
    }
  };
};

export default connect(mapState, mapDispatch)(ViewCart);
