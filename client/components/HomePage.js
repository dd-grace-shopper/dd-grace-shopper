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
      <h1>D&D Wine & Liquor</h1>
      <h2>Welcome to New York City's best online wine & spirits store</h2>
      <h3>Featured Products</h3>
      <br /><br />
       <div className="ui three column grid">
          {products &&
            randomProductsToFeature.map(id => {
              const product = productsById[id];
              return (
                <div className="column" key={id}>
                  <div className="ui segment">
                    <Link to={`products/${id}`}>
                      <h2>{product.name}</h2>
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
