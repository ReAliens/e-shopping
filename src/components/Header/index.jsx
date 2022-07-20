import { Component } from 'react';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import currencyIcon from '../../images/currency.png';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="nav-links">
          <NavLink to="/"> All </NavLink>
          <NavLink to="/techs"> Tech </NavLink>
          <NavLink to="/clothes"> Clothes </NavLink>
        </nav>
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" />
        </NavLink>
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
