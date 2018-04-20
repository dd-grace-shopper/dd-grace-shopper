import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeft extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Filter Products</Button>

        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='category'>Category</Menu.Item>
          <Menu.Item name='size'>Size</Menu.Item>
          <Menu.Item name='country'>Country</Menu.Item>
        </Sidebar>

      </div>
    )
  }
}

export default SidebarLeft;



