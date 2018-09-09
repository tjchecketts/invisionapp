import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Message from './components/Message'

class App extends Component {
  state = {
    companyName: "Eureka Heights Brew Co.",
    itemName: "Flight of (5) 4 ox Pours of Any of Our Beers",
    boldSection: "Adult - Monir Parikh",
    moreContent: "Valid Until: Jan, 21 2018, 04:42 PM"
  }

  createMessages = () => {
    let messages = []
    for (let i = 0; i < 5; i++) {
      messages.push(
        <Message 
          boldSection={this.state.boldSection}
          moreContent={this.state.moreContent}
        />
      )
    }
    return messages
  }

  render() {
    const { companyName, itemName } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h5>{companyName}</h5>
          <h1 className="App-title">{itemName}</h1>
          <Menu />
        </header>
        {this.createMessages()}
      </div>
    );
  }
}

export default App;
