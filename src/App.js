import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Message from './components/Message'

class App extends Component {
  state = {
    boldSection: "Adult - Monir Parikh",
    moreContent: "Valid Until: Jan, 21 2018, 04:42 PM"
  }

  render() {
    const {boldSection, moreContent} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h5>Eureka Heights Brew Co.</h5>
          <h1 className="App-title">Flight of (5) 4 ox Pours of Any of Our Beers</h1>
          <Menu />
        </header>
        <Message 
          boldSection={boldSection}
          moreContent={moreContent}
        />
        <Message 
          boldSection={boldSection}
          moreContent={moreContent}
        />
        <Message 
          boldSection={boldSection}
          moreContent={moreContent}
        />
        <Message 
          boldSection={boldSection}
          moreContent={moreContent}
        />
      </div>
    );
  }
}

export default App;
