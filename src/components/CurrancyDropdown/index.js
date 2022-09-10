import { Component } from 'react';
import './index.css'

export default class CurrancyDropdown extends Component {
  render() {
    return (
      <div className="dropdown-container">
        {this?.props?.options?.map((option, index) => (
          <div className="row-container" key={index}>
            <span>{option.symbol}</span>
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    );
  }
}
