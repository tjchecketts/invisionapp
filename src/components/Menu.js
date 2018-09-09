import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuComponent extends Component {
  render() {
    const { activeTab, handleTabClick } = this.props

    return (
      <Menu inverted pointing secondary>
        <Menu.Item
          name='info'
          active={activeTab === 'info'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name='tickets'
          active={activeTab === 'tickets'}
          onClick={handleTabClick}
        />
      </Menu>
    )
  }
}

export default MenuComponent