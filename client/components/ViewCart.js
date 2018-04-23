import React from 'react';
import { Link } from 'react-router-dom';

const ViewCart = props => {
  const cart = props.productsInCart || [];
  const total = props.total || 0;
  const numItems = props.numItems || 0;

  if (numItems === 0) {
    return (
      <h1 className="empty-cart-message">
        Your cart is empty. Buy something!
      </h1>
    );
  }

  return (
    <div>
      <h1>Currently in Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => {
            return (
              <tr className="cartItem" key={item.productId}>
                <td>
                  <img src={item.imageUrl} />
                </td>
                <td>
                  {item.name}
                  <button
                    onClick={evt => props.handleDelete(evt, item.productId)}
                  >
                    Delete
                  </button>
                </td>
                {/*TODO: UI*/}
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    type="button"
                    value="minus"
                    onClick={evt =>
                      props.handleUpdate(evt, item.productId, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    value="plus"
                    onClick={evt =>
                      props.handleUpdate(evt, item.productId, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />
      <h4
        className="cart-subtotal"
      >
        {`Subtotal: (${numItems}items) : $ ${total}`}
      </h4>

      <Link to={{ pathname: '/checkout', state: { total } }}>
        <button>Checkout!</button>
      </Link>
    </div>
  );
};

export default ViewCart;
