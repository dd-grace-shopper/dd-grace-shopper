import React from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';

const AllProducts = props => {
  const { products, productsById } = props;
  return (
    <div>
      <h1>All Products</h1>
      {products &&
        products.map(id => {
          const product = productsById[id];
          return (
            <div key={id}>
              <div>
                <Link to={`products/${id}`}>
                  <h2>{product.name}</h2>
                </Link>
                <img className="product-img" src={product.imageUrl} />
                <AddToCart productId={id} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AllProducts;
