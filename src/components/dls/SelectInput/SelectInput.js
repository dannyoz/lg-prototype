import React from 'react'
import { validate } from '../_helpers/validationHelper'

class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: true,
      error: null
    }
  }

  validateField(event) {
    const value = event.target.value
    const validationRules = this.props.validationRules
    const fieldData = validate(value, validationRules)
    this.setState(fieldData)
  }

  handleChange(event) {
    this.props.onChange(event)
  }

  render() {
    const inValid = !this.state.isValid
    const className = (inValid) ? 'form-field has-error' : 'form-field'
    const options = this.props.options

    return (
      <div className={className}>
        <label className="form-label">{this.props.children}</label>
        <div className="form-field-select">
          <select 
            className="form-control" 
            aria-invalid="false"
            onChange={this.handleChange.bind(this)}
            onBlur={this.validateField.bind(this)}>
            <option>-- Please select --</option>
            {options.length && options.map((option, index) => {
              return <option key={index}>{option.label}</option>
            })}
          </select>
          <i className="icon icon-chevron-down" aria-hidden="true"></i>
        </div>
        {inValid &&
          <div className="form-validation-error">
            <p>{this.state.error}</p>
          </div>
        }
      </div>
    )
  }
}

export default SelectInput
