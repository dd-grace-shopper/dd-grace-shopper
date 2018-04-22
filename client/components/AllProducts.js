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

  const filteredIds = products && products.filter(id => {
    if(!filteredproductCategories.length || !filteredProductSize.length) {
      if(filter.length && filter.indexOf(productsById[id].category.category) > -1) {
        return id;
      }
      else if(filter.length && filter.indexOf(productsById[id].size.mililiter) > -1) {
        return id;
      }
    }
    else {
      if(filter.length && filter.length && filter.indexOf(productsById[id].category.category) > -1 && filter.length && filter.indexOf(productsById[id].size.mililiter) > -1) {
        return id;
      }
    }
  })

  const filteredProducts = products && filteredIds.length ? filteredIds : products

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
         <SidebarLeft />
         <Sidebar.Pusher>
          <Segment basic id="all-products-container" className={allProductsContainerClass}>
             <h1>All Products</h1>
             <DisplaySidebar />
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
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

