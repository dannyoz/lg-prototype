import React from 'react';
import { validate } from './validationHelper'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: true
    }
  }

  validate(event) {
    const value = event.target.value
    const validationRules = this.props.validationRules
    const isValid = validate(value, validationRules)
    if (!isValid) {
      this.setState({ isValid: false })
    }
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
          onBlur={this.validate.bind(this)}
          onChange={this.handleChange.bind(this)}
          />
          {inValid &&
            <div id="input-2-error" className="form-validation-error">
              <p>This field contains an error.</p>
            </div>
          }
      </div>
    )
  }
}

export default TextInput