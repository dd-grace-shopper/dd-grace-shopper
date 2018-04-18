import React, { Component } from 'react';
import { AddToCart } from './AddToCart';
import { Link } from 'react-router-dom';

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts ? this.props.getAllProducts() : null;
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h1>All Products</h1>
        {Object.keys(products).map(index => {
          return (
            <div key={index}>
              <AddToCart product={products[index]} />
              <Link to={`products/${index}`}>
                <h2>{products[index].name}</h2>
              </Link>
              <img src="https://d14vtdp4hn1qux.cloudfront.net/assets/revamp/wine-placeholder-560512e07fc89ac005242a6ab3065c07.jpg" />
            </div>
          );
        })}
      </div>
    );
  }
}
