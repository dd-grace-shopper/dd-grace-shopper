import React from 'react';
import { Link } from 'react-router-dom';

const ViewCart = props => {
  const cart = props.productsInCart ? props.productsInCart : null;
  const total = props.total;
  const numItems = props.numItems;
  console.log("@@@@@", props);
  console.log("<><><>",cart);
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
              <td><img src={item.imageUrl} /></td>
              <td>
                {item.name}
                <button
                  onClick={evt => props.handleDelete(evt, item.productId)}
                >Delete</button>
              </td>{/*TODO: UI*/}
              <td>{item.price}</td>
              <td>{item.quantity}</td>{/*DROPDOWN??*/}
              <td>
                <button type="button" value="minus" onClick={evt => props.handleUpdate(evt,  item.productId, (item.quantity - 1))}>
                  -
                </button>
                <button type="button" value="plus" onClick={evt => props.handleUpdate(evt,  item.productId, (item.quantity + 1))}>
                  +
                </button>
              </td>
            </tr>
          );
        })
      }
      </tbody>
      </table>
      <br />
      <h4> {`Subtotal: (${numItems}items) : $ ${total}`} </h4>

      <Link to={'/checkout'}>
        <button>Checkout!</button>
      </Link>
    </div>
  );
}

export default ViewCart;





