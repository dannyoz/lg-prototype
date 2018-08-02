import React from 'react'

class CheckBoxGroup extends React.Component {
  render() {
    const options = this.props.options

    return (
      <fieldset className="fieldset">
        <legend className="fieldset-label">{this.props.children}</legend>
        <div className="form-group">
          {options.length && options.map((option, index) => {
            return (
              <div className="form-field" key={index}>
                <input
                  id={`checkbox-${option.label}`}
                  type="checkbox"
                  name="checkbox-group"
                  className="form-control"
                  aria-invalid="false"
                  value="checkbox-group-1-value"
                />
                <label htmlFor={`checkbox-${option.label}`} className="form-label">{option.label}</label>
              </div>
            )
          })}
          
        </div>
      </fieldset>
    )
  }
}

export default CheckBoxGroup
