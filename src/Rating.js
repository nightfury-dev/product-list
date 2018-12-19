import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating
    };
  }

  render() {
    return(
      <div>
        <h1>Rating: {this.state.rating}</h1>
        <Glyphicon
          glyph={this.state.rating >= 1 ? "star" : "star-empty"}
        />
        <Glyphicon
          glyph={this.state.rating >= 2 ? "star" : "star-empty"}
        />
        <Glyphicon
          glyph={this.state.rating >= 3 ? "star" : "star-empty"}
        />
        <Glyphicon
          glyph={this.state.rating >= 4 ? "star" : "star-empty"}
        />
        <Glyphicon
          glyph={this.state.rating >= 5 ? "star" : "star-empty"}
        />
      </div>
    );
  }
}

export default Rating;
