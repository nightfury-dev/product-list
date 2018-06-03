import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Another React Tutorial!</h1>
        <Products />
        <Button bsStyle="primary">Default</Button>
      </div>
    );
  }
}

export default App;
