import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class MessageComponent extends Component {
  render() {
    const { activeTab, buttonClicked } = this.props

    const buttonCode = (
      <div className="round">
        <input type="checkbox" id="checkbox" onClick={buttonClicked}/>
        <label htmlFor="checkbox"></label>
      </div>
    )

    return (
      <Message>
        <Message.Header>{activeTab === "info" ? this.props.infoTitle : this.props.messageTitle}</Message.Header>
        <p>{activeTab === "info" ? this.props.infoBody : this.props.messageBody}</p>
        {activeTab === "info" ? null : buttonCode}
      </Message>
    )
  }
}

export default MessageComponent