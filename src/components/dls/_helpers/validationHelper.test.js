import { validate } from './validationHelper'

describe('Text input tests', () => {
  it('Should validate fields correctly', () => {
    const test1 = validate('value', ['required'])
    const test2 = validate('test@test.com', ['required', 'email'])
    const test3 = validate('', ['required', 'email'])
    const test4 = validate('test', ['required', 'email'])
    const test5 = validate('test@test.com', ['required', 'email'], 'test@user.com')

    expect(test1.isValid).toBeTruthy()
    expect(test2.isValid).toBeTruthy()
    expect(test3).toEqual({
      isValid: false,
      error: 'This field is required'
    })
    expect(test4).toEqual({
      isValid: false,
      error: 'Not a valid email'
    })
    expect(test5).toEqual({
      isValid: false,
      error: 'Email address does not match'
    })
  })
})
