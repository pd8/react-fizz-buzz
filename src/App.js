import React, { Component } from 'react';
import logo from './assets/svg/logo.svg';
import './assets/css/App.css';
import Fizz from './components/fizz';
import Buzz from './components/buzz';
import FizzBuzz from './components/fizzbuzz';
import Panel from './components/panel';

function displayComponent(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return <FizzBuzz key={val} value={val} />;
  } else if (val % 5 === 0) {
    return <Buzz key={val} value={val} />;
  } else if (val % 3 === 0) {
    return <Fizz key={val} value={val} />;
  } else {
    return <Panel key={val} value={val} />;
  }
}

class App extends Component {
  constructor(...props) {
    super(...props);
    
    this.state = {
      upperLimit: 100,
    }
  }

  handleChange = (e) => {
    this.handleRangeChange();
  }

  handleRangeChange = () => {
    const val = document.getElementById('myRange').value;
    this.setState({upperLimit: val});
  }

  render() {
    const { upperLimit } = this.state;
    const elems = [];
    for (let i = 0; i <= this.state.upperLimit; i++) {
      elems.push(displayComponent(i));
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="range" id="myRange" defaultValue={upperLimit} max="1000" onChange={this.handleChange} style={{"width": "100%"}} />
        <br />
        {
          elems
        }
      </div>
    );
  }
}

export default App;
