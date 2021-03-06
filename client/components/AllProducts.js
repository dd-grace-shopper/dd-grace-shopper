import React, { Component } from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import SidebarLeft from './SidebarContainer';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import DisplaySidebar from './DisplaySidebar';


export default class AllProducts extends Component {

/*eslint-disable*/
  render() {
    const { products, productsById, filter } = this.props;
    const allProductsContainerId = this.props.sidebarVisible
      ? "all-products-container-with-sidebar"
      : "all-products-container-no-sidebar"

    // Getting only unique filtered products by category, size, and price range
    const productCategories = products.length && products.map(id => {
      return productsById[id].category.category
    })
    const uniqueproductCategories = Array.from(new Set(productCategories));
    const filteredproductCategories = uniqueproductCategories.filter(product => {
      return filter.indexOf(product) > -1
    })

    const productSize = products.length && products.map(id => {
      return productsById[id].size.mililiter
    })
    const uniqueProductSize = Array.from(new Set(productSize));
    const filteredProductSize = uniqueProductSize.filter(product => {
      return filter.indexOf(product) > -1
    })

    const productPrice = products.length && products.map(id => {
      return productsById[id].priceRange
    })
    const uniqueProductPrice = Array.from(new Set(productPrice));
    const filteredProductPrice = uniqueProductPrice.filter(product => {
      return filter.indexOf(product) > -1
    })

    // Returning matching product IDs depending on which combination of filters is clicked
    const filteredIds = products.length && products.filter(id => {
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

    const filteredProducts = products.length && filteredIds.length ? filteredIds : products

    let noMatchingProducts = false;
    if(filter.length && !filteredIds.length) {
      noMatchingProducts = true;
    }

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
         <SidebarLeft />
         <Sidebar.Pusher>
          <Segment basic id={allProductsContainerId}>
            <div className="all-products-header">
              <h1 className="component-title">All Products</h1>
              <DisplaySidebar />
            </div>
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
               <div className="ui segment four column grid ">

                  {filteredProducts.length &&
                    filteredProducts.map(id => {
                      const product = productsById[id];
                      return (
                        <div key={id} className = "column">
                        <div className = "ui segment">
                        <div >
                        <Link to={`products/${id}`} className="product-name">
                          <h3 className="ui small header">{product.name}</h3>
                          <img className="product-img" src={product.imageUrl} />
                        </Link>
                          <div className="product-info-right">
                            <h4 className = "ui blackheader">{`$${product.price}`}</h4>
                            <AddToCart productId={id} />
                          </div>
                        </div>
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
}
