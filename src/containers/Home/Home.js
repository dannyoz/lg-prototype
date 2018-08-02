import React from 'react'
import {
  Button,
  CheckBoxGroup,
  SelectInput,
  TextInput,
  EmailInput,
  DateInput
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
          <TextInput {...formfields.name} onChange={this.handleChange.bind(this, 'name')}>Name</TextInput>
          <SelectInput {...formfields.title} onChange={this.handleChange.bind(this, 'title')}>Title</SelectInput>
          <EmailInput {...formfields.confirmEmail} onChange={this.handleChange.bind(this, 'email')}>What's your email address?</EmailInput>
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
