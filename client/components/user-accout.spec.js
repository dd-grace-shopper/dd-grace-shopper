/* global describe beforeEach it */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserAccount,
  mapState,
  mapDispatch
} from './UserAccount';
import { deleteUserThunk } from '../store/user';

import { expect } from 'chai';
import { spy } from 'sinon';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The React-Redux connected UserAccount component', () => {
  const dummyAccountInfo = {
    fullname: 'Georgi Porgi-Gregorgi',
    email: 'porgi@georgi.gregorgi',
    id: 1
  };

  describe('The UserAccount presentational component', () => {
    let singleAccount,
        renderedLinks, editLinkProps, cartLinkProps, ordersLinkProps;
    const links = {
        edit: '/account/edit',
        cart: '/view-cart',
      orders: '/past-orders'
    }
    const handleClick = spy();
    const { fullname, email, id } = dummyAccountInfo;

    beforeEach(() => {
      singleAccount = shallow(<UserAccount
        fullname={fullname}
        email={email}
        id={id}
        handleClick={handleClick}
      />);
      renderedLinks = singleAccount.find(Link);
    });

    // rendered user data //
    describe('User data', () => {
      it('Renders an account holder\'s full name', () => {
        const nameInfo = singleAccount.find('.single-account-fullname').text();
        expect(nameInfo).to.include(dummyAccountInfo.fullname);
      });
      it('Renders an account holder\'s email address', () => {
        const emailInfo = singleAccount.find('.single-account-email').text();
        expect(emailInfo).to.include(dummyAccountInfo.email);
      });
      xit('Renders an account holder\'s image', () => {
        const accountImgUrl = singleAccount.find('.single-account-img').props().src;
        expect(accountImgUrl).to.equal(dummyAccountInfo.imageUrl);
      });
    });

    // rendered links //
    /* (for now: hardcoded in the following order)
       (better: store renderedLinkElement results in a hash - convert to that format - and then test by key, so we'll always know 'edit' corresponds to the edit link, for instance.) */
    describe('Links', () => {
      it('Renders a link to an edit form for an account so that, as a user of this account, I can update my info', () => {
        editLinkProps = renderedLinks.get(0).props;
        expect(editLinkProps.to).to.equal(links.edit);
        expect(editLinkProps.children.props.children).to.include('Edit');
        // really need to expand support of 'indexOf' to include regex, which would allow for more flexible data input and would probs help avoid some hard to reason about bugs. So that you could enter data in (at worst) the form "new RegExp('edit', 'i').toString()".
        // also note the lookup in re 'props.children' chaining anti-pattern, whereas this could be implemented either iteratively or recursively tracking down the tree of children within a link to those including the data whose veracity tests are meant to confirm.
      });
      it('Renders a link to a cart for an account so that, as a user of this account, I can CRUD my cart', () => {
        cartLinkProps = renderedLinks.get(1).props;
        expect(cartLinkProps.to).to.equal(links.cart);
        expect(cartLinkProps.children.props.children).to.include('cart');
      });
      it('Renders a link to past orders for an account so that, as a user of this account, I can revisit the details of my past transactions', () => {
        ordersLinkProps = renderedLinks.get(2).props;
        expect(ordersLinkProps.to).to.equal(links.orders);
        expect(ordersLinkProps.children.props.children).to.include('orders');
      });
    });
  });

  describe('The component\'s cached state mapper (mapState)', () => {
    const { fullname, email, id } = dummyAccountInfo;
    const mappedState = mapState({ user: dummyAccountInfo });
    it('Ties a user\'s fullname from state to the fullname prop for the component', () => {
      expect(mappedState.fullname).to.equal(fullname);
    });
    it('Ties a user\'s email from state to the email prop for the component', () => {
      expect(mappedState.email).to.equal(email);
    });
    it('Ties a user\'s id from state to the id prop for the component', () => {
      expect(mappedState.id).to.equal(id);
    });
  });
  describe('The component\'s memoized action mapper (mapDispatch)', () => {
    const mappedDispatch = mapDispatch();
    it('Adds a handleClick method for the component', () => {
      expect(mappedDispatch.handleClick).to.exist; // eslint-disable-line
      expect(mappedDispatch.handleClick).to.be.a.function; // eslint-disable-line
    });
    // To view the handleClick method itself:
    //  console.log(mappedDispatch.handleClick.toString())
  });
});

