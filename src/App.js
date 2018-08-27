import React, { Component } from 'react';
import './resources/styles.css';

// Components
import Header from './components/header_footer/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
