import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Checkbox } from 'semantic-ui-react'

export function SidebarLeft (props) {
  let { visible, products, productsById } = props;

  const productsForSidebar = products && products.map(id => {
    return productsById[id].category.category
  })
  const uniqueProductsForSidebar = Array.from(new Set(productsForSidebar));

  return (
    <div>
      <Sidebar as={Menu} className="ui vertical inverted" animation="push" visible={visible}>
        <Form.Group inline>
          <label>Category</label>
            {
              products && uniqueProductsForSidebar.map(category => {
                return <div key={category}>
                  <Form.Field label={category} value={category} control='input' type='checkbox' onChange={props.onChange} />
                </div>
              })
            }
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
            <Form.Field label='750ml' value='750ml' control='input' type='checkbox' onChange={props.onChange} />
            <Form.Field label='medium' control='input' type='checkbox' />
            <Form.Field label='large' control='input' type='checkbox' />
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



// <Form.Field label='Red Wine' value='Red Wine' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='White Wine' value='White Wine' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='Whiskey' value='Whiskey' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='Rum' value='Rum' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='Vodka' value='Vodka' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='Gin' value='Gin' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='Brandy' value='Brandy' control='input' type='checkbox' onChange={props.onChange} />
//             <Form.Field label='Tequila' value='Tequila' control='input' type='checkbox' onChange={props.onChange} />
