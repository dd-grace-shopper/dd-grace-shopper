/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const Size = db.model('size');

describe('product model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('getter method for size attribute', () => {
    let product;

    beforeEach(() => {
      return Size.create({
        mililiter: 750
      }).then(size => {
        product = size;
      });
    });

    it('returns a number followed by ml or l depending on the size value', () => {
      expect(product.size).to.equal('750ml');
    });
  });
}); // end describe('product model')
