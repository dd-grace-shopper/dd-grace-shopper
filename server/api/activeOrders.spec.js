const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const ActiveOrder = db.model('activeOrder')

describe('Active Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/active-orders/', () => {
    const myOrder = {
      id: 8,
      mySessionId:'123456789',
      productQuantity: 3
    }

    beforeEach(() => {
      return ActiveOrder.create(myOrder)
    })

    it('GET /api/active-orders returns empty array when there is no req.session or req.user' , () => {
      return request(app)
      .get('/api/active-orders')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array')
        expect(res.body[0]).to.be.equal(undefined)
      })
    })

    it('POST /api/active-orders', () => {
      return request(app)
      .post('/api/active-orders')
      .send(myOrder)
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object')
        expect(res.body.quantity).to.be.equal(1)
      })
    })
  })
})
