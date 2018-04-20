import React, { Component } from 'react';

export default class ViewCart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const cart = this.props.productsInCart ? this.props.productsInCart : null;
    const total = this.props.total;
    const numItems = this.props.numItems;

    return (
      <div>
        <h1>Currently in Cart</h1>
        <table >
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
         </thead>
         <tbody>
        {
          cart.map(item => {
            return (
              <tr className="cartItem" key={item.productId}>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>{item.quantity}</td>
              </tr>
            );
          })
        }
        </tbody>
        </table>
        <br />
        <h4> {`Subtotal: (${numItems}items) : $ ${total}`} </h4>

        <button>Checkout!</button>
      </div>
    );
  }
}
