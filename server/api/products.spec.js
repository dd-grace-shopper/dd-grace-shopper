/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/products/', () => {

    beforeEach(() => {
      return Product.bulkCreate([{
        price: 10098,
        name: 'New Wine',
        category: 'red wine',
        country: 'USA',
        size: '750'
      }, {price: 20098,
        name: 'Old Wine',
        category: 'white wine',
        country: 'USA',
        size: '750'}])
    })

    it('should return an object with the following shape: { cookieId: String or null, productsById: {obj of products, keyed by id}, products: [array of product ids] }', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');

          expect(res.body.hasOwnProperty('cookieId')).to.equal(true);

          expect(res.body.hasOwnProperty('productsById')).to.equal(true);
          expect(res.body.productsById).to.be.an('object');
          expect(res.body.productsById[1].name).to.equal('New Wine');
          expect(res.body.productsById[2].category).to.equal('white wine');

          expect(res.body.hasOwnProperty('products')).to.equal(true);
          expect(res.body.products).to.be.an('array');
          expect(res.body.products).to.have.lengthOf(2);
          expect(res.body.products[0]).to.equal(1);
          expect(res.body.products[1]).to.equal(2);
        })
    })
  }) // end describe('/api/Products')
}) // end describe('Product routes')
