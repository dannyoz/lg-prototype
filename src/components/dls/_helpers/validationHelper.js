const validateEmail = (email) => {
  // eslint-disable-next-line
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

export const validate = (value, rules = [], emailAddress = null) => {
  const required = rules.indexOf('required') >= 0
  const email = rules.indexOf('email') >= 0
  let fieldData = {}

  if (required && (!value || value === '-- Please select --')) {
    fieldData.isValid = false
    fieldData.error = 'This field is required'
  } else if (emailAddress && (value !== emailAddress)){
    fieldData.isValid = false
    fieldData.error = 'Email address does not match'
  } else if (email && !validateEmail(value)) {
    fieldData.isValid = false
    fieldData.error = 'Not a valid email'
  } else {
    fieldData.isValid = true
    fieldData.error = null
  }

  return fieldData

}

  