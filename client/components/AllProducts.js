import React from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import SidebarLeft from './Sidebar';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import DisplaySidebar from './DisplaySidebar';

const AllProducts = props => {
  const { products, productsById } = props;
  const allProductsContainerClass = props.sidebarVisible
    ? "all-products-container-with-sidebar"
    : "all-products-container-no-sidebar"


  return (
    <div>
      <Sidebar.Pushable as={Segment}>
         <SidebarLeft />
         <Sidebar.Pusher>
          <Segment basic id="all-products-container" className={allProductsContainerClass}>
             <h1>All Products</h1>
             <DisplaySidebar />
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
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

const mapState = state => {
  return {
    sidebarVisible: state.sidebarReducer
  }
}

export default connect(mapState)(AllProducts);
