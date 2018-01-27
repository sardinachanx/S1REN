import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Container } from 'bloomer';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from './utils/typography';
import HomePage from './layouts/HomePage';
import Header from './components/Header';
import PageFooter from './components/PageFooter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <Header />
        <Container>
          <HomePage />
        </Container>
        <PageFooter />
      </div>
    );
  }
}

export default App;
