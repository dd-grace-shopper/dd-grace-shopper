import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class myOrders extends Component {
  componentDidMount() {
    this.props.getAllPastOrders();
  }

  render() {
    const orders = this.props.orders;
    return (
      <div>
        <h1> View Your Past Orders </h1>
        {orders.length &&
          orders.map(order => {
            return (
              <div key={order.id}>
                <p>
                  Order ID:{' '}
                  <Link to={`/account/order/${order.id}`}>{order.id}</Link>{' '}
                </p>
                <p>Total Price: ${order.total}</p>
                <br />
              </div>
            );
          })}
      </div>
    );
  }
}
