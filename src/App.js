import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {

    const isValid = true;

    return (
      <div>
        <h1>Another React Tutorial!</h1>
        <Products />
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        <Button bsStyle="primary" disabled={!isValid}>Default</Button>
      </div>
    );
  }
}

export default App;
