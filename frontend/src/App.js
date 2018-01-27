import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from './utils/typography';
import HomePage from './layouts/HomePage';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
