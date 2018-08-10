import React from 'react'
import {
  TextInput,
  EmailInput,
  Button
} from '../dls/dls'

class LetsStartInvesting extends React.Component {
  handleChange(field, event) {
    console.log(field, event.target.value)
  }

  continue() {
    this.props.switchStep(2)
  }

  render() {
    const required = ['required']
    const email = ['required', 'email']
    return (
      <div className="application-step__body">
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'firstName')}>First name</TextInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'lastName')}>Last name</TextInput>
        <EmailInput validationRules={email} onChange={this.handleChange.bind(this, 'email')}>What's your email address?</EmailInput>
        <div className="form-field">
          <Button styles={['cta', 'chevron']} onClick={this.continue.bind(this)}>Continue</Button>
        </div>
      </div>
    )
  }
}

export default LetsStartInvesting
