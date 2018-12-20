import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {

    const isValid = true;

    return (
      <div>
        <h1>React Product List</h1>
        <Products />
        <Button bsStyle="primary" disabled={!isValid}>Default</Button>
      </div>
    );
  }
}

export default App;
