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

  const filteredIds = products && products.filter(id => {
    if(filter.length && filter.indexOf(productsById[id].category.category) > -1) {
      return id;
    }
  })

  const filteredProducts = products && filteredIds.length ? filteredIds : products



  // console.log(products && typeof productsById[1])
    // console.log('PRODUCTS', products && productsById[1].category.category)
    console.log('FILTER!@', filteredProducts)

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

