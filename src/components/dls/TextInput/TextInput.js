import React from 'react'
import { validate } from '../_helpers/validationHelper'

class TextInput extends React.Component {
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

    return (
      <div className={className}>
        <label className="form-label">{this.props.children}</label>
        <input 
          type="text"
          className="form-control"
          aria-invalid={inValid}
          placeholder={this.props.placeholder}
          onBlur={this.validateField.bind(this)}
          onChange={this.handleChange.bind(this)}
          />
        {inValid &&
          <div className="form-validation-error">
            <p>{this.state.error}</p>
          </div>
        }
      </div>
    )
  }
}

export default TextInput
