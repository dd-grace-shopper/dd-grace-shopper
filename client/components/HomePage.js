import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage (props) {

  const products = props.products;
  const productsById = props.productsById;
  const randomProductsToFeature = []
  products && products.forEach(id => {
    let randomNum = Math.floor(Math.random() * products.length + 1);
    if(randomProductsToFeature.length < 6 && randomProductsToFeature.indexOf(randomNum) === -1) {
      randomProductsToFeature.push(randomNum)
    }
  })

  // console.log('randomProductsToFeature', randomProductsToFeature)

  return (
    <div>
      <div className="ui segment">
      <h2>Welcome to New York City's best online wine & spirits store</h2>
      <h3>Featured Products</h3>
      </div>
      <br /><br />
       <div className="ui segment three column grid">
          {products &&
            randomProductsToFeature.map(id => {
              const product = productsById[id];
              return (
                <div className="column" key={id}>
                  <div className="ui segment">
                    <Link to={`products/${id}`}>
                      <h4 className = "ui black header">{product.name}</h4>
                    </Link>
                    <img className="product-img" src={product.imageUrl} />
                  </div>
                </div>
              );
            })}
        </div>
      <br /><br />
    </div>
  )
}
