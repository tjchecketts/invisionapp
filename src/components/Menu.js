import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuComponent extends Component {
  state = { activeItem: 'info' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted pointing secondary>
        <Menu.Item
          name='info'
          active={activeItem === 'info'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='tickets'
          active={activeItem === 'tickets'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default MenuComponent