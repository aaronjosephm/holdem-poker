import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image from './pokerTable.png';


var styles = {
  color: 'violet',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover',
  overflow: 'hidden'
};

class App extends Component {
  render() {
    return (
      <div>
          <h1>How to make smth</h1>
          <div style={styles}>test</div>
      </div>
    );
  }
}

export default App;
