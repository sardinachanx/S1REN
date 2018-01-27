import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from './utils/typography';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <header>
          <h1>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
