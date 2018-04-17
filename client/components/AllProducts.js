import React, { Component } from 'react';

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {

    const { products } = this.props;

    return (
      <div>
        <h1>All Products</h1>
        {
          Object.keys(products).map(index => {
            return (
              <div key={index}>
                <h1>{products[index].name}</h1>
                <h4>{products[index].price}</h4>
                <h4>{products[index].description}</h4>
                <h4>{products[index].country}</h4>
                <h4>{products[index].size}</h4>
              </div>
            )
          })
        }
      </div>
    );
  }
}
