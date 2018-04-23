import React from 'react';

export function HomePage (props) {

  const products = props.products;
  const productsById = props.productsById;
  const randomProductsToFeature = []
  products && products.forEach(id => {
    let randomNum = Math.floor(Math.random() * products.length + 1);
    while(randomProductsToFeature.length < 6) {
      if(id === randomNum) {
        randomProductsToFeature.push(id)
      }
    }
  })

  console.log('randomProductsToFeature', randomProductsToFeature)

  return (
    <div>
      <h2>D&D Wine & Liquor</h2>
      <h4>Welcome to New York City's best online wine & spirits store</h4>
      <br /><br />
    </div>
  )
}
