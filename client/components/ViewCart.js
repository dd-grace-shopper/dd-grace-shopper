import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Image, Button } from 'semantic-ui-react';

const ViewCart = props => {
  const cart = props.productsInCart || [];
  const total = props.total || 0;
  const numItems = props.numItems || 0;
  const destination = props.destination;
  const finalDistance = props.finalDistance;

  if (numItems === 0) {
    return (
      <h1 className="empty-cart-message">Your cart is empty. Buy something!</h1>
    );
  }

  let shippingFee;

  if (finalDistance === undefined){
    shippingFee = 0;
  } else if (finalDistance < 50) {
    shippingFee = 5;
  } else if (finalDistance <= 100) {
    shippingFee = 8;
  } else {
    shippingFee = 10;
  }

  return (
    <div>
      <div className="ui segment">
        <h1>Your Shopping Cart</h1>
        <table className="ui fixed table">
          <thead>
            <tr>
              <th> </th>
              <th className="4 wide">Product Name</th>
              <th>Price</th>
              <th className="2 wide">Quantity </th>
              <th className="2 wide">Update </th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => {
              return (
                <tr className="cartItem" key={item.productId}>
                  <td>
                    <img className="ui small image" src={item.imageUrl} />
                  </td>
                  <td>{item.name}</td>
                  {/*TODO: UI*/}
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="ui secondary button"
                      onClick={evt => props.handleDelete(evt, item.productId)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="ui button"
                      value="minus"
                      onClick={evt =>
                        props.handleUpdate(
                          evt,
                          item.productId,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="ui button"
                      value="plus"
                      onClick={evt =>
                        props.handleUpdate(
                          evt,
                          item.productId,
                          item.quantity + 1
                        )
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
      </div>

      <div className="ui right aligned segment very padded">
        <h4> {`Subtotal: (${numItems} items) : $ ${total.toFixed(2)}`} </h4>

        <form className="ui form">
          <div className="field">
            <label>
              {' '}
              Please type in city and state to estimate shipping cost
            </label>
            <div className="ui fluid input">
              <input
                type="text"
                placeholder="City, State"
                onChange={props.handleChange}
              />
              <button
                className="ui button"
                role="button"
                onClick={evt => props.handleClickDistance(evt, destination)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          {!finalDistance ? 'Distance' : `Distance: ${finalDistance} miles`}
        </div>

        <div>
          {shippingFee ? `Shipping Fee: $ ${shippingFee}` : 'Shipping Cost'}
        </div>
        <h4> {`Total: $ ${(total + shippingFee).toFixed(2)}`} </h4>
        <Link
          to={{
            pathname: '/checkout',
            state: { total: (total + shippingFee).toFixed(2) }
          }}
        >
          <button className="ui secondary button">Checkout!</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
