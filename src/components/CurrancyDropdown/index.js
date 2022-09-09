import { Component } from 'react';

export default class CurrancyDropdown extends Component {
  render() {
    return (
      <div className="dropdown-container">
        {this?.props?.options?.map((option, index) => (
          <div className="row-container" key={index}>
            <span>{option.label}</span>
            <span>{option.value}</span>
          </div>
        ))}
      </div>
    );
  }
}
