import React from 'react'
import {
  TextInput,
  DateInput,
  SelectInput,
  NiNumberInput
} from '../dls/dls'

class PersonalDetails extends React.Component {
  handleChange(field, event) {
    console.log(field, event.target.value)
  }

  render() {
    const formFields = {
      title: {
        validationRules: ['required'],
        onChange: this.handleChange.bind(this, 'title'),
        options: [{
          label: 'Mr',
          value: 'mr'
        },{
          label: 'Mrs',
          value: 'mrs'
        },{
          label: 'Miss',
          value: 'miss'
        }]
      },
    }

    const required = ['required']

    return (
      <div className="application-step__body">
        <SelectInput {...formFields.title}>Title</SelectInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'firstName')}>First name</TextInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'lastName')}>Last name</TextInput>
        <DateInput validationRules={required} onChange={this.handleChange.bind(this, 'dateOfBirth')}>Date of birth</DateInput>
        <NiNumberInput validationRules={required} onChange={this.handleChange.bind(this, 'niNumber')}>National insurance number</NiNumberInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'address1')}>Address line 1</TextInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'address2')}>Address line 2</TextInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'city')}>City / town</TextInput>
        <TextInput onChange={this.handleChange.bind(this, 'county')}>County (optional)</TextInput>
        <TextInput validationRules={required} onChange={this.handleChange.bind(this, 'postcode')}>Postcode</TextInput>
      </div>
    )
  }
}

export default PersonalDetails
