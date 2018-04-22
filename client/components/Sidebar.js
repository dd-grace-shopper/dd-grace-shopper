import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Checkbox } from 'semantic-ui-react'

export function SidebarLeft (props) {
  let { visible, products, productsById, filter } = props;

  // Getting unique product categories, sizes, and prices to display in sidebar filter
  const CategoriesForSidebar = products && products.map(id => {
    return productsById[id].category.category
  })
  const uniqueCategoriesForSidebar = Array.from(new Set(CategoriesForSidebar));

  const SizesForSidebar = products && products.map(id => {
    return productsById[id].size.mililiter
  })
  const uniqueSizesForSidebar = Array.from(new Set(SizesForSidebar)).sort();

  const pricesForSidebar = products && products.map(id => {
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
                  <Form.Field label={category} value={category} control='input' type='checkbox' onChange={props.handleChange} />
                </div>
              })
            }
          <label>Size</label>
            {
              products && uniqueSizesForSidebar.map(size => {
                return <div key={size}>
                  <Form.Field label={size} value={size} control='input' type='checkbox' onChange={props.handleChange} />
                </div>
              })
            }
          <label>Price</label>
            {
              products && uniquePricesForSidebar.map(price => {
                return <div key={price}>
                  <Form.Field label={price} value={price} control='input' type='checkbox' onChange={props.handleChange} />
                </div>
              })
            }
          <Button type="reset" onClick={props.handleClick} >Reset</Button>
        </Form.Group>
      </Sidebar>

    </div>
  )
}

