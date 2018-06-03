import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {

    const isValid = true;

    return (
      <div>
        <h1>Another React Tutorial!</h1>
        <Products />
        <Button bsStyle="primary" disabled={!isValid}>Default</Button>
      </div>
    );
  }
}

export default App;
