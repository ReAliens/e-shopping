import { Component } from 'react';
import cartCircle from '../../images/cartCircle.png';
import './index.css';

export default class ProductCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="image-container">
          <img alt="product" className="product-image" src={this.props.image} />
          <img src={cartCircle} alt="cart-Icon" className="cart-circle" />
          {this?.props?.stock && <p>OUT OF STOCK</p>}
        </div>
        <h5 className="product-title">{this.props.name}</h5>
        <h5> {this.props.price}</h5>
      </div>
    );
  }
}
