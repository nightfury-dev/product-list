import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return(
      <div>
        <h1>Rating: {this.props.rating}</h1>
      </div>
    );
  }
}

export default Rating;
