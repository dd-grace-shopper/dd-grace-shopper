import React, { Component } from 'react';

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts ? this.props.getAllProducts() : null;
  }

  render() {
    const product = this.props.product ? this.props.product : null;
    return (
      <div>
        {product && (
          <div>
            <h1 className="single-product-name">
              Name: {product.name}
            </h1>
            <div>
              {product.imageUrl && (
                <img className="single-product-img" src={product.imageUrl} />
              )}
              <h4 className="single-product-description">
                Description: {product.description}
              </h4>
              {product.category && (
                <h4 className="single-product-category">
                  Category: {product.category.category}
                </h4>
              )}
              {product.country && (
                <h4 className="single-product-country">
                  Country: {product.country.name}
                </h4>
              )}
              {product.size && (
                <h4 className="single-product-size">
                  Size: {product.size.mililiter}
                </h4>
              )}
              <h4 className="single-product-price">
                Price: {product.price}
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

{
  /* <h4>Category: {product.category.name}</h4>
              <h4>Country: {product.country.name}</h4>
              <h4>Size: {product.size.mililiter}</h4> */
}
