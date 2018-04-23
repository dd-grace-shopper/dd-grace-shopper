import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class OrderConfirmation extends Component {

  componentDidMount() {
    // this.props.confirmationOrder
    //   ? this.props.confirmationOrder(this.props.order.id)
    //   : null;
    this.props.confirmationOrder(this.props.order.id);
    this.props.removeOrderedProductsFromCart(this.props.cart);
  }

  render() {
    console.log(this.props);
    const { order } = this.props;
    const products = order ? order.products : null;
    return (
      <div>
        {order && (
          <div>
            <h1>Thank you for your order {order.name}!</h1>
            <p>Shipping Address: {order.address_line1}</p>
            <p>City: {order.address_city}</p>
            <p>State: {order.address_state}</p>
            <p>Zip Code: {order.address_zip}</p>
            <p>Country: {order.address_country}</p>
            <h2>Items Ordered:</h2>
            {products &&
              products.map(product => {
                console.log(product.name);
                return (
                  <div key={product.id}>
                    <p>
                      Name: {product.name}, Price: {product.price}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}
