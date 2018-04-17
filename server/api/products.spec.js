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

  describe('/api/products/', () => {

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

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal('New Wine')
          expect(res.body[1].category).to.be.equal('white wine')
        })
    })
  }) // end describe('/api/Products')
}) // end describe('Product routes')
