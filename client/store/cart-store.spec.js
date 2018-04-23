/* global describe beforeEach afterEach it */

import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import history from '../history';

import cart, {
  CREATE_CART, ADD_TO_CART, UPDATE_ITEM_IN_CART, DELETE_FROM_CART, RESET_CART,
  createCart, addToCart, updateItemInCart, deleteFromCart, resetCart,
  fetchCart, postToCart, updateProductQuantity, deleteProductFromCart
} from './cart';
import { reducer } from './index';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

const initialState = {};

const mockCartState = {
  1: {
    productId: 1,
    quantity: 1
  },
  2: {
    productId: 2,
    quantity: 2
  },
  3: {
    productId: 3,
    quantity: 3
  },
};

const mockOrder = {
  4: {
    productId: 4,
    quantity: 4
  }
};
const mockOrderId = Object.keys(mockOrder)[0];

const updatedItemFromMockCart = { productId: 2, quantity: 1 };

describe('The `cart` slice of state', () => {

  describe('action creators', () => {
    describe('createCart', () => {
      it('Returns an object with a type of CREATE_CART and a value deep equaling the new cart', () => {
        const newCart = createCart(mockCartState);
        expect(newCart.type).to.equal(CREATE_CART);
        expect(newCart.newCart).to.deep.equal(mockCartState);
      });
    });
    describe('addToCart', () => {
      it('Returns an object with a type of ADD_TO_CART and a value deep equaling the new item to add to the cart', () => {
        const newOrder = addToCart(mockOrder);
        expect(newOrder.type).to.equal(ADD_TO_CART);
        expect(newOrder.order).to.deep.equal(mockOrder);
      });
    });
    describe('updateItemInCart', () => {
      it('Returns an object with a type of UPDATE_ITEM_IN_CART and a value deep equaling the item info to update in the cart', () => {
        const updatedItem = updateItemInCart(updatedItemFromMockCart);
        expect(updatedItem.type).to.equal(UPDATE_ITEM_IN_CART);
        expect(updatedItem.item).to.deep.equal(updatedItemFromMockCart);
      });
    });
    describe('deleteFromCart', () => {
      it('Returns an object with a type of DELETE_FROM_CART and the productId of the product to delete from the cart', () => {
        const itemToDelete = deleteFromCart(1);
        expect(itemToDelete.type).to.equal(DELETE_FROM_CART);
        expect(itemToDelete.productId).to.equal(1);
      });
    });
    describe('resetCart', () => {
      it('Returns an object with a type of RESET_CART', () => {
        expect(resetCart()).to.deep.equal({ type: RESET_CART });
      });
    });
  });


  describe('thunk creators', () => {
    let actions;
    let store;
    let mockAxios;

    beforeEach(() => {
      mockAxios = new MockAdapter(axios);
      store = mockStore(initialState);
    });
    afterEach(() => {
      mockAxios.restore();
      store.clearActions();
    });

    describe('fetchCart', () => {
      it('eventually dispatches the CREATE_CART action', () => {
        mockAxios.onGet('/api/active-orders').replyOnce(200, [{
            productId: 1,
            quantity: 1
          }, {
            productId: 2,
            quantity: 2
          }, {
            productId: 3,
            quantity: 3
          }
        ]);
        return store.dispatch(fetchCart()).then(() => {
          actions = store.getActions();
          expect(actions[0].type).to.equal(CREATE_CART);
          expect(actions[0].newCart).to.deep.equal(mockCartState);
        });
      });
    });

    describe('postToCart', () => {
      it('eventually dispatches the ADD_TO_CART action', () => {
        mockAxios.onPost('/api/active-orders').replyOnce(201, {
          productId: 4,
          quantity: 4
        });
        return store.dispatch(postToCart()).then(() => {
          actions = store.getActions();
          expect(actions[0].type).to.equal(ADD_TO_CART);
          expect(actions[0].order).to.deep.equal(mockOrder);
        });
      });
    });

    describe('updateProductQuantity', () => {
      it('eventually dispatches the UPDATE_ITEM_IN_CART action', () => {
        mockAxios.onPut(
          `/api/active-orders/${updatedItemFromMockCart.productId}`,
          { newQuantity: updatedItemFromMockCart.quantity }
        ).replyOnce(200, updatedItemFromMockCart);
        return store.dispatch(updateProductQuantity(
          updatedItemFromMockCart.productId,
          updatedItemFromMockCart.quantity
        )).then(() => {
          actions = store.getActions();
          expect(actions[0].type).to.equal(UPDATE_ITEM_IN_CART);
          expect(actions[0].item[2]).to.deep.equal(updatedItemFromMockCart);
        });
      });
    });

    describe('deleteProductFromCart', () => {
      it('eventually dispatches the DELETE_FROM_CART action', () => {
        mockAxios.onDelete('/api/active-orders/1').replyOnce(204);
        return store.dispatch(deleteProductFromCart(1)).then(() => {
          actions = store.getActions();
          expect(actions[0].type).to.equal(DELETE_FROM_CART);
          expect(actions[0].productId).to.equal(1);
        });
      });
    });
  });


  describe('cart reducer', () => {
    let newState;
    it('CREATE_CART action reduces state to the new cart', () => {
      newState = cart(initialState, createCart(mockCartState));
      expect(newState).to.deep.equal(mockCartState);
    });
    it('ADD_TO_CART action reduces state to state plus new order', () => {
      newState = cart(mockCartState, addToCart(mockOrder));
      expect(newState).to.haveOwnProperty(mockOrderId);
      expect(newState[mockOrderId]).to.deep.equal(mockOrder[mockOrderId]);
    });
    it('UPDATE_ITEM_IN_CART action reduces state to state with updated item', () => {
      newState = cart(
        mockCartState,
        updateItemInCart(updatedItemFromMockCart)
      );
      expect(
        newState[updatedItemFromMockCart.productId]
      ).to.deep.equal(updatedItemFromMockCart);
    });
    it('DELETE_FROM_CART action reduces state to state without deleted item', () => {
      newState = cart(mockCartState, deleteFromCart(2));
      expect(newState).to.haveOwnProperty(1);
      expect(newState).to.not.haveOwnProperty(2);
      expect(newState).to.haveOwnProperty(3);
    });
    it('RESET_CART action reduces to an empty cart', () => {
      newState = cart(mockCartState, resetCart());
      expect(newState).to.deep.equal({});
    });
    it('Reduces to state by default', () => {
      newState = cart(mockCartState, { type: null });
      expect(newState).to.deep.equal(mockCartState);
    })
  });
});
