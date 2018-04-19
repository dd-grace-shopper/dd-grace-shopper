import React, { Component } from 'react';

export default class ViewCart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const products = this.props.products ? this.props.products : null;
    return (
      <div>
        <h1>Currently in Cart</h1>
        {products && (
          <div>
            <h4>{products.name}</h4>
            <h4>{products.price}</h4>
          </div>
        )}
        <button>Checkout!</button>
      </div>
    );
  }
}
