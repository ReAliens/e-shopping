import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import currencyIcon from '../../images/currency.png';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="nav-links">
          <Link to="/"> All </Link>
          <Link to="/tech"> Tech </Link>
          <Link to="/clothes"> Clothes </Link>
        </nav>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="cart-currency-container">
          <img src={currencyIcon} alt="currency-converter" className="icon" />
          <div className="cart-container">
            <img src={cart} alt="cart" className="icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
