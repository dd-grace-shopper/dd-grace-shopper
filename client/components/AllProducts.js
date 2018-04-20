import React, { Component } from 'react';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import SidebarLeft from './Sidebar';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

export class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts ? this.props.getAllProducts() : null;
    this.props.handleClick;
  }

  render() {
    const { products, productsById, cookieId } = this.props;
    console.log('!!!', this.props.handleClick)

    return (
      <div>
        <SidebarLeft />
        <div className="ui container pusher">
          <h1>All Products</h1>
           <Button onClick={console.log('filter')}>Filter Products</Button>
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

const mapDispatch = function(dispatch, ownProps) {
  return {
    handleClick (evt) {
      evt.preventDefault();
      console.log('CLICKED BUTTON')

      // dispatch(updateUserThunk(user, id));
    }
  };
};


export default connect(mapDispatch)(AllProducts);
