import React, { Component } from 'react';

import { Container } from "components";
import Editor from "pages/Editor/Editor";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Editor />
      </Container>
    );
  }
}

export default App;
