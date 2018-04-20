import React, { Component } from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import SidebarLeft from './Sidebar';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import DisplaySidebar from './DisplaySidebar';

export class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts ? this.props.getAllProducts() : null;
  }

  render() {
    const { products, productsById, cookieId } = this.props;

    return (
      <div>
        <SidebarLeft />
        <div className="ui container pusher">
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
          </div>
      </div>
    );
  }
}
