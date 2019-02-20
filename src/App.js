import React, { Component } from 'react';
import OutputBox from './OutputBox'
import './App.css'

class App extends Component {
  state = {
    value: null
  }

  onChange = event => {
    this.setState({value: event.target.value })
  }

  render() {
    return (
      <div className="app">
        <OutputBox />
        <input onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
