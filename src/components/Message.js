import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class MessageComponent extends Component {
  render() {
    return (
      <Message>
        <Message.Header>{this.props.boldSection}</Message.Header>
        <p>{this.props.moreContent}</p>
        <div className="round">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
      </Message>
    )
  }
}

export default MessageComponent