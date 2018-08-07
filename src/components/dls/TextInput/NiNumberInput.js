import React from 'react'

class NiNumberInput extends React.Component {
  handleChange(event) {
    console.log(event)
  }

  render() {
    return (
      <div className="form-field">
        <label>{this.props.children}</label>
        <p className="legal">E.g. QQ 123456 C</p>
        <div className="ni-number-input">
          <input 
            type="text"
            className="form-control"
            placeholder="--"
            onChange={this.handleChange.bind(this)}
            />
          <input 
            type="text"
            className="form-control"
            placeholder="------"
            onChange={this.handleChange.bind(this)}
            />
          <input 
            type="text"
            className="form-control"
            placeholder="-"
            onChange={this.handleChange.bind(this)}
            />
        </div>
      </div>
    )
  }
}

export default NiNumberInput
