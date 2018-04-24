import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class OrderConfirmation extends Component {
  componentDidMount() {
    // this.props.confirmationOrder
    //   ? this.props.confirmationOrder(this.props.order.id)
    //   : null;
    this.props.confirmationOrder(this.props.order.id);
    this.props.createPurchasedItemsObj(this.props.cart);
    this.props.removeOrderedProductsFromCart(this.props.cart);
  }

  render() {
    const { order, itemsPurchased } = this.props;
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
            <p>Total Price: $ {order.total}</p>
            <h2>Items Ordered:</h2>
            {products &&
              products.map(product => {
                console.log(product.name);
                return (
                  <div key={product.id}>
                    <p>
                      Name: {product.name}, Price: {product.price} x{' '}
                      {itemsPurchased[product.id].quantity}
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
