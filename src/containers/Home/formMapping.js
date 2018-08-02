export const titleOptions = [{
  label: 'Mr',
  value: 'mr'
}, {
  label: 'Mrs',
  value: 'mrs'
}, {
  label: 'Miss',
  value: 'miss'
}, {
  label: 'Master',
  value: 'master'
}, {
  label: 'Dr',
  value: 'dr'
}]

export const checkBoxOptions = [{
  label: 'Option 1',
  value: 'option-1'
}, {
  label: 'Option 2',
  value: 'option-2'
}, {
  label: 'Option 3',
  value: 'option-3'
}]

export const formfields = {
  name: {
    placeholder: 'Please enter your name',
    validationRules: ['required']
  },
  email: {
    placeholder: 'Please enter your email',
    validationRules: ['required', 'email']
  },
  confirmEmail: {
    placeholder: 'Please confirm your email',
    validationRules: ['required', 'email']
  },
  title: {
    validationRules: ['required'],
    options: titleOptions
  },
  options: {
    validationRules: ['required'],
    options: checkBoxOptions
  }
}

