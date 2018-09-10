import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Message from './components/Message'
import { Button } from 'semantic-ui-react'

class App extends Component {
  state = {
    companyName: "Eureka Heights Brew Co.",
    itemName: "Flight of (5) 4 oz Pours of Any of Our Beers",
    activeTab: 'info',
    infoTitle: "Hours of Operation",
    infoBody: "At Nightly Spirits Houston, our haunted pub tours are an experience that you won't soon forget!",
    messageTitle: "Adult - Monir Parikh",
    messageBody: "Valid Until: Jan, 21 2018, 04:42 PM",
    buttonColor: null
  }

  handleTabClick = (e, { name }) => this.setState({ activeTab: name })

  buttonClicked = () => {this.state.buttonColor === "positive" ? this.setState({ buttonColor: null }) : this.setState({ buttonColor: "positive" }) }

  // creates multiple identical components
  createMessages = () => {
    let messages = []
    for (let i = 0; i < 4; i++) {
      messages.push(
        <Message 
          activeTab={this.state.activeTab}
          messageTitle={this.state.messageTitle}
          messageBody={this.state.messageBody}
          buttonClicked={this.buttonClicked}
        />
      )
    }
    {this.state.buttonColor === "positive" ?
      messages.push(
        <Button positive>Confirm Redemption</Button>
      )
        : 
      messages.push(
        <Button disabled>Confirm Redemption</Button>
      )
    }
    return messages
  }

  // creates multiple identical components
  createInfo = () => {
    let infoMessages = []
    for (let i = 0; i < 2; i++) {
      infoMessages.push(
        <Message 
          activeTab={this.state.activeTab}
          infoTitle={this.state.infoTitle}
          infoBody={this.state.infoBody}
        />
      )
    }
    return infoMessages
  }

  render() {
    const { companyName, itemName, activeTab } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h5>{companyName}</h5>
          <h1 className="App-title">{itemName}</h1>
          <Menu 
            activeTab={activeTab}
            handleTabClick={this.handleTabClick}
          />
        </header>
        {/* switches content based on active tab */}
        { activeTab === "info" ? this.createInfo() : this.createMessages()}
      </div>
    );
  }
}

export default App;
