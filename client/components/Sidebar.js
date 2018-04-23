import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Checkbox,Lable } from 'semantic-ui-react'

export default class SidebarLeft extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllProducts ? this.props.getAllProducts() : null;
  }

  render() {
    let { visible, products, productsById, filter } = this.props ? this.props : null;

      // Getting unique product categories, sizes, and prices to display in sidebar filter
      const CategoriesForSidebar = products.length && products.map(id => {
        return productsById[id].category.category
      })
      const uniqueCategoriesForSidebar = Array.from(new Set(CategoriesForSidebar));

      const SizesForSidebar = products.length && products.map(id => {
        return productsById[id].size.mililiter
      })
      const uniqueSizesForSidebar = Array.from(new Set(SizesForSidebar)).sort();

      const pricesForSidebar = products.length && products.map(id => {
        return productsById[id].priceRange
      })
      const uniquePricesForSidebar = Array.from(new Set(pricesForSidebar)).sort();

      return (
        <div>
          <Sidebar as={Menu} className="ui vertical inverted" animation="push" visible={visible}>
            <Form.Group inline>
              <label>Category</label>
                {
                  products && uniqueCategoriesForSidebar.map(category => {
                    return <div key={category}>
                      <Form.Field label={category} value={category} control='input' type='checkbox' onChange={this.props.handleChange} />
                    </div>
                  })
                }
              <label>Size</label>
                {
                  products && uniqueSizesForSidebar.map(size => {
                    return <div key={size}>
                      <Form.Field label={size} value={size} control='input' type='checkbox' onChange={this.props.handleChange} />
                    </div>
                  })
                }
              <label>Price</label>
                {
                  products && uniquePricesForSidebar.map(price => {
                    return <div key={price}>
                      <Form.Field label={price} value={price} control='input' type='checkbox' onChange={this.props.handleChange} />
                    </div>
                  })
                }
              <Button type="reset" onClick={this.props.handleClick} >Reset</Button>
            </Form.Group>
          </Sidebar>

        </div>
      )

  }
}
