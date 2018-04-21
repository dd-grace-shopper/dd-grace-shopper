import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Checkbox } from 'semantic-ui-react'

export function SidebarLeft (props) {
  let visible = props.visible

  console.log('CHANGE!!', props.onChange)

  return (
    <div>
      <Sidebar as={Menu} className="ui vertical inverted" animation="push" visible={visible}>
        <Form.Group inline>
          <label>Category</label>
            <Form.Field label='Red Wine' value='Red Wine' control='input' type='checkbox' onChange={props.onChange} />
            <Form.Field label='White Wine' value='White Wine' control='input' type='checkbox' onChange={props.onChange} />
            <Form.Field label='Whiskey' value='Whiskey' control='input' type='checkbox' onChange={props.onChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
            <Form.Field label='small' control='input' type='checkbox' />
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

