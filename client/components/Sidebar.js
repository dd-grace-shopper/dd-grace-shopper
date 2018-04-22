import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Checkbox } from 'semantic-ui-react'

export function SidebarLeft (props) {
  let { visible, products, productsById } = props;

  const CategoriesForSidebar = products && products.map(id => {
    return productsById[id].category.category
  })
  const uniqueCategoriesForSidebar = Array.from(new Set(CategoriesForSidebar));

  const SizesForSidebar = products && products.map(id => {
    return productsById[id].size.mililiter
  })
  const uniqueSizesForSidebar = Array.from(new Set(SizesForSidebar));

  return (
    <div>
      <Sidebar as={Menu} className="ui vertical inverted" animation="push" visible={visible}>
        <Form.Group inline>
          <label>Category</label>
            {
              products && uniqueCategoriesForSidebar.map(category => {
                return <div key={category}>
                  <Form.Field label={category} value={category} control='input' type='checkbox' onChange={props.onChange} />
                </div>
              })
            }
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
            {
              products && uniqueSizesForSidebar.map(size => {
                return <div key={size}>
                  <Form.Field label={size} value={size} control='input' type='checkbox' onChange={props.onChange} />
                </div>
              })
            }
        </Form.Group>
        <Form.Group inline>
          <label>Price</label>
            <Form.Field label='$' control='input' type='checkbox' />
            <Form.Field label='$$' control='input' type='checkbox' />
            <Form.Field label='$$$' control='input' type='checkbox' />
            <Form.Field label='$$$$' control='input' type='checkbox' />
        </Form.Group>
      </Sidebar>

    </div>
  )
}

