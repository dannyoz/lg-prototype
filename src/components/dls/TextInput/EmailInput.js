import React from 'react'
import { validate } from '../_helpers/validationHelper'

class EmailInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      email: {
        isValid: true,
        error: null
      },
      confirm: {
        isValid: true,
        error: null
      }
    }
  }

  validateField(key, event) {
    const value = event.target.value
    const validationRules = this.props.validationRules
    const email = this.state.value
    const fieldData = validate(value, validationRules, email)
    const state =  this.state
    state[key] = fieldData
    this.setState(state)
  }

  handleChange(event) {
    const value = event.target.value
    this.props.onChange(event)
    this.setState({ value })
  }

  render() {
    const inValidEmail = !this.state.email.isValid
    const emailClass = (inValidEmail) ? 'form-field has-error' : 'form-field'
    const inValidConfirm = !this.state.confirm.isValid
    const confirmClass = (inValidConfirm) ? 'form-field has-error' : 'form-field'

    return (
      <fieldset className="fieldset">
        <div className={emailClass}>
          <label className="form-label">{this.props.children}</label>
          <input
            type="text"
            className="form-control"
            aria-invalid={inValidEmail}
            placeholder={this.props.placeholder}
            onBlur={this.validateField.bind(this, 'email')}
            onChange={this.handleChange.bind(this)}
            />
          {inValidEmail &&
            <div className="form-validation-error">
              <p>{this.state.email.error}</p>
            </div>
          }
        </div>
        <div className={confirmClass}>
          <label className="form-label">Confirm email address</label>
          <input
            type="text"
            className="form-control"
            aria-invalid={inValidConfirm}
            placeholder={this.props.placeholder}
            onBlur={this.validateField.bind(this, 'confirm')}
            />
          {inValidConfirm &&
            <div className="form-validation-error">
              <p>{this.state.confirm.error}</p>
            </div>
          }
        </div>
      </fieldset>
    )
  }
}

export default EmailInput
