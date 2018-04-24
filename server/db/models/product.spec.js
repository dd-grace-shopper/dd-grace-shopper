/* global describe beforeEach it */

const {expect} = require('chai');
const db = require('../index');
const Product = db.model('product');

describe.only('product model', () => {
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

    // doesn't make sense anymore because price data type changed to integer
    xit('returns a string like "10098" to represent price in USD', () => {
      expect(product.price).to.equal('100.98');
    });

    it('return the appropriate price range based on the price', () =>{
      expect(product.priceRange).to.equal('$$$$')
    })
  })
}) // end describe('product model')
