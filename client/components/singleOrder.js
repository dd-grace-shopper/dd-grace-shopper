import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class singleOrder extends Component {
  componentDidMount() {
    this.props.confirmationOrder(this.props.match.params.id);
    this.props.fetchQuantity(this.props.match.params.id);
  }

  render() {
    const { order } = this.props;
    const products = order ? order.products : null;
    const { itemsPurchased } = this.props;
    return (
      <div>
        <Link to="/account/my-orders">
          <button>Go Back</button>
        </Link>
        {order && (
          <div>
            <h1>Order ID: {order.id} </h1>
            <p>Shipping Address: {order.address_line1}</p>
            <p>City: {order.address_city}</p>
            <p>State: {order.address_state}</p>
            <p>Zip Code: {order.address_zip}</p>
            <p>Country: {order.address_country}</p>
            <p>Total Price: $ {order.total}</p>
            <h2>Items Ordered:</h2>
            {products &&
              itemsPurchased &&
              console.log(itemsPurchased) &&
              products.map(product => {
                const item = itemsPurchased.find(
                  item => item.productId === product.id
                );
                return (
                  <div key={product.id}>
                    <p>{product.name}</p>
                    <p>
                      {product.price} x {item.quantity}
                    </p>
                    <br />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

// {products &&
//   products.map(product => {
//     console.log(product.name);
//     return (
//       <div key={product.id}>
//         <p>
//           Name: {product.name}, Price: {product.price} x{' '}
//           {itemsPurchased[product.id].quantity}
//         </p>
//       </div>
//     );
//   })}
