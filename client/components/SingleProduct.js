import React, { Component } from 'react';
import AddToCart from './AddToCart';
import Notifications, {notify} from 'react-notify-toast';

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
      <div className = "ui mini segment">
        <span>
        <Notifications />
        <AddToCart productId={product.id} />
        </span>
        {product && (
          <div className = "ui compact segment">
            <h1 className="single-product-name">
              {product.name}
            </h1>
            <div className = "ui compact very padded segment ">
              <div className = "ui very padded segment" id = "singleimage">
              {product.imageUrl && (
                <img className="single-product-img" src={product.imageUrl} />
              )}
              </div>
              <div className="single-product-description-section">
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
          </div>
        )}
      </div>
    );
  }
}

