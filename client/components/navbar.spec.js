/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { Navbar } from './navbar';
import { Link } from 'react-router-dom';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The Navbar component', () => {
  let navbar, clickSpy, renderedLinkElements, homeLinkProps, productsLinkProps, cartLinkProps, accountLinkProps, loginLinkProps, signupLinkProps;
  const links = {
    home: '/home',
    products: '/products',
    cart: '/view-cart',
    account: '/account',
    login: '/login',
    signup: '/signup'
  };

  describe('For a logged-in user', () => {
    beforeEach(() => {
      clickSpy = spy();
      navbar = shallow(
        <Navbar
          handleClick={clickSpy}
          isLoggedIn={true}
        />
      );
      renderedLinkElements = navbar.find(Link);
    });
    it('Renders a "Home" link', () => {
      homeLinkProps = renderedLinkElements.get(0).props;
      expect(homeLinkProps.to).to.equal(links.home);
      expect(homeLinkProps.children).to.equal('Home');
    });
    it('Renders an "All Products" link', () => {
      productsLinkProps = renderedLinkElements.get(1).props;
      expect(productsLinkProps.to).to.equal(links.products);
      expect(productsLinkProps.children).to.equal('All Products');
    });
    it('Renders a "View Cart" link', () => {
      cartLinkProps = renderedLinkElements.get(2).props;
      expect(cartLinkProps.to).to.equal(links.cart);
      expect(cartLinkProps.children).to.equal('View Cart');
    });
    it('Renders a "My Account" link', () => {
      accountLinkProps = renderedLinkElements.get(3).props;
      expect(accountLinkProps.to).to.equal(links.account);
      expect(accountLinkProps.children).to.equal('My Account');
    });
    it('Renders a "Logout" link that when clicked triggers a click handler to trigger logout procedure', () => {
      expect(clickSpy).not.to.have.been.called; // eslint-disable-line
      navbar.find('a').simulate('click');
      expect(clickSpy).to.have.been.called; // eslint-disable-line
    });
  });

  describe('For a non-logged-in guest user', () => {
    beforeEach(() => {
      clickSpy = spy();
      navbar = shallow(
        <Navbar
          handleClick={clickSpy}
          isLoggedIn={false}
        />
      );
      renderedLinkElements = navbar.find(Link);
    });
    it('Renders a "Login" link', () => {
      loginLinkProps = renderedLinkElements.get(0).props;
      expect(loginLinkProps.to).to.equal(links.login);
      expect(loginLinkProps.children).to.equal('Login');
    });
    it('Renders a "Sign Up" link', () => {
      signupLinkProps = renderedLinkElements.get(1).props;
      expect(signupLinkProps.to).to.equal(links.signup);
      expect(signupLinkProps.children).to.equal('Sign Up');
    });
    it('Renders an "All Products" link', () => {
      productsLinkProps = renderedLinkElements.get(2).props;
      expect(productsLinkProps.to).to.equal(links.products);
      expect(productsLinkProps.children).to.equal('All Products');
    });
    it('Renders a "View Cart" link', () => {
      cartLinkProps = renderedLinkElements.get(3).props;
      expect(cartLinkProps.to).to.equal(links.cart);
      expect(cartLinkProps.children).to.equal('View Cart');
    });
  });
});
