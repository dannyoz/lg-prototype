import React from 'react'
import {
  Button,
  CheckBoxGroup,
  DateInput,
  EmailInput,
  SelectInput,
  NiNumberInput,
  TextInput
} from '../../components/dls/dls'

import { formfields } from './formMapping'

class Home extends React.Component {
  handleChange(key, event) {
    console.log(key, event.target.value)
  }

  submit() {
    console.log('button')
  }

  render() {
    return (
      <div className="container">
        <form>
          <TextInput {...formfields.name} onChange={this.handleChange.bind(this, 'name')}>First name</TextInput>
          <TextInput {...formfields.name} onChange={this.handleChange.bind(this, 'last-name')}>Last name</TextInput>
          <SelectInput {...formfields.title} onChange={this.handleChange.bind(this, 'title')}>Title</SelectInput>
          <EmailInput {...formfields.confirmEmail} onChange={this.handleChange.bind(this, 'email')}>What's your email address?</EmailInput>
          <NiNumberInput>National Insurance Number</NiNumberInput>
          <DateInput startYear={1950} >Date of birth</DateInput>
          <CheckBoxGroup {...formfields.options}>Check box group</CheckBoxGroup>
          <div className="form-field">
            <Button styles={['cta', 'chevron']} onClick={this.submit.bind(this)}>Submit</Button>
            <Button styles={['secondary', 'chevron']} onClick={this.submit.bind(this)}>Cancel</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Home
