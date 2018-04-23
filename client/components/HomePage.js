import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts ? this.props.getAllProducts() : null;
  }

  render() {
    const products = this.props ? this.props.products : null;
    const productsById = this.props ? this.props.productsById : null;
    const randomProductsToFeature = []
    products.length && products.forEach(id => {
      let randomNum = Math.floor(Math.random() * products.length + 1);
      if(randomProductsToFeature.length < 6 && randomProductsToFeature.indexOf(randomNum) === -1) {
        randomProductsToFeature.push(randomNum)
      }
    })

    return (
      <div>
        <h1>D&D Wine & Liquor</h1>
        <h2>Welcome to New York City's best online wine & spirits store</h2>
        <h3>Featured Products</h3>
        <br /><br />
         <div className="ui three column grid">
            {products.length &&
              randomProductsToFeature.map(id => {
                const product = productsById[id];
                return (
                  <div className="column" key={id}>
                    <div className="ui segment">
                      <Link to={`products/${id}`}>
                        <h2>{product.name}</h2>
                      </Link>
                      <img className="product-img" src={product.imageUrl} />
                    </div>
                  </div>
                );
              })}
          </div>
        <br /><br />
      </div>
    )

  }
}
