import React, { Component } from 'react';
import Rating from './Rating';
import { Media } from 'react-bootstrap';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Media>
          <Media.Left>
            <img width={64} height={64} src={this.props.data.imageUrl} alt="image" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.data.productName}</Media.Heading>
            <p>
              {this.props.releasedDate}
            </p>
            <Rating
              rating={this.props.data.rating}
              numOfReviews={this.props.data.numOfReviews}
            />
            <p>
              {this.props.data.description}
            </p>
          </Media.Body>
        </Media>
      </div>;
    );
  }
}

export default Product;
