import React from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import SidebarLeft from './SidebarContainer';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import DisplaySidebar from './DisplaySidebar';

export const AllProducts = props => {
  const { products, productsById, filter } = props;
  const allProductsContainerClass = props.sidebarVisible
    ? "all-products-container-with-sidebar"
    : "all-products-container-no-sidebar"

  // Getting only unique filtered products by category, size, and price range
  const productCategories = products && products.map(id => {
    return productsById[id].category.category
  })
  const uniqueproductCategories = Array.from(new Set(productCategories));
  const filteredproductCategories = uniqueproductCategories.filter(product => {
    return filter.indexOf(product) > -1
  })

  const productSize = products && products.map(id => {
    return productsById[id].size.mililiter
  })
  const uniqueProductSize = Array.from(new Set(productSize));
  const filteredProductSize = uniqueProductSize.filter(product => {
    return filter.indexOf(product) > -1
  })

  const productPrice = products && products.map(id => {
    return productsById[id].priceRange
  })
  const uniqueProductPrice = Array.from(new Set(productPrice));
  const filteredProductPrice = uniqueProductPrice.filter(product => {
    return filter.indexOf(product) > -1
  })

  // Returning matching product IDs depending on which combination of filters is clicked
  const filteredIds = products && products.filter(id => {
    const productsByIdCategory = filter.indexOf(productsById[id].category.category) > -1;
    const productsByIdSize = filter.indexOf(productsById[id].size.mililiter) > -1;
    const productsByIdPrice = filter.indexOf(productsById[id].priceRange) > -1;

    if(filteredproductCategories.length && !filteredProductPrice.length && !filteredProductSize.length) {
      if(filter.length && productsByIdCategory) {
        return id;
      }
    }
    else if(filteredProductSize.length && !filteredProductPrice.length && !filteredproductCategories.length) {
      if(filter.length && productsByIdSize) {
        return id;
      }
    }
    else if(filteredProductPrice.length && !filteredProductSize.length && !filteredproductCategories.length) {
      if(filter.length && productsByIdPrice) {
        return id;
      }
    }
    else {
      if(filter.length && !filteredProductPrice.length && productsByIdCategory && productsByIdSize) {
        return id;
      }
      else if(filter.length && !filteredProductSize.length && productsByIdCategory && productsByIdPrice) {
        return id;
      }
      else if(filter.length && !filteredproductCategories.length && productsByIdSize && productsByIdPrice) {
        return id;
      }
      else if(filter.length && productsByIdCategory && productsByIdSize && productsByIdPrice) {
        return id;
      }
    }
  })

  const filteredProducts = products && filteredIds.length ? filteredIds : products

  let noMatchingProducts = false;
  if(filter.length && !filteredIds.length) {
    noMatchingProducts = true;
  }

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
         <SidebarLeft />
         <Sidebar.Pusher>
          <Segment basic id="all-products-container" className={allProductsContainerClass}>
             <h1>All Products</h1>
             <DisplaySidebar />
             <hr />
             {
              noMatchingProducts
              ?
                <div>
                  <br /><br />
                  <h3>There are currently no products matching you search</h3>
                  <br /><br /><br /><br />
                </div>
              :
               <div>
                  {filteredProducts &&
                    filteredProducts.map(id => {
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
             }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

