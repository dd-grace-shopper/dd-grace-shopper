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
            <h1>Name: {product.name}</h1>
            <div>
              <img src="https://d14vtdp4hn1qux.cloudfront.net/assets/revamp/wine-placeholder-560512e07fc89ac005242a6ab3065c07.jpg" />
              <h4>Category: {product.category}</h4>
              <h4>Country: {product.country}</h4>
              <h4>Size: {product.size}</h4>
              <h4>Description: {product.description}</h4>
              <h4>Price: {product.price}</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}
