import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

export function SidebarLeft (props) {
  // state = { visible: false }

  // toggleVisibility = () => this.setState({ visible: !this.state.visible })

  // const { visible } = this.state
  let visible = props.visible

  return (
    <div>

      {/*<Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>*/}
      <Sidebar visible={visible}>
        <Menu.Item name='category'>Category</Menu.Item>
        <Menu.Item name='size'>Size</Menu.Item>
        <Menu.Item name='country'>Country</Menu.Item>
      </Sidebar>

    </div>
  )
}

const mapState = state => {
  return {
    visible: state.sidebarReducer
  }
}

export default connect(mapState)(SidebarLeft);


