import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'info' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
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
      </Segment>
    )
  }
}