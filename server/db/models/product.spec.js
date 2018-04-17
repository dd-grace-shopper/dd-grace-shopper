/* global describe beforeEach it */

const {expect} = require('chai');
const db = require('../index');
const Product = db.model('product');

describe('product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('getter method for price attribute', () => {
    let product;

    beforeEach(() => {
      return Product.create({
        price: 10098,
        name: 'New Wine',
        category: 'red wine',
        country: 'USA',
        size: '750'
      })
        .then(wine => {
          product = wine;
        })
    })

    it('returns a string like "100.98" to represent price in USD', () => {
      expect(product.price).to.equal('100.98');
    });
  })
}) // end describe('product model')
