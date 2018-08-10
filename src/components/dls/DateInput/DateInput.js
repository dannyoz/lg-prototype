import React from 'react'
import { days, months, yearRange } from '../_helpers/dateRangeHelper'
import { kebabify } from '../_helpers/kebabHelper'

class DateInput extends React.Component {
  render() {
    const years = yearRange(this.props.startYear)
    const id = kebabify(this.props.children)

    return (
      <fieldset className="fieldset fieldset-select-date">
        <legend id="legend-select-date" className="fieldset-label">{this.props.children}</legend>

        <div className="form-group">
          <div className="form-field">
            <label htmlFor={`select-${id}-days`} className="form-label access">Day</label>

            <div className="form-field-select">
              <select
                className="form-control"
                id={`select-${id}-days`}
                aria-invalid="false"
                aria-labelledby="legend-select-date">
                <option>Day</option>
                {days.map((day, index) => {
                  return <option key={index}>{day}</option>
                })}
              </select>

              <i className="icon icon-chevron-down" aria-hidden="true"></i>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor={`select-${id}-months`} className="form-label access">Month</label>

            <div className="form-field-select">
              <select
                className="form-control"
                id={`select-${id}-months`}
                aria-invalid="false"
                aria-labelledby="legend-select-date">
                <option>Month</option>
                {months.map((month, index) => {
                  return <option key={index}>{month}</option>
                })}
              </select>

              <i className="icon icon-chevron-down" aria-hidden="true"></i>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor={`select-${id}-years`} className="form-label access">Year</label>

            <div className="form-field-select">
              <select
                className="form-control"
                id={`select-${id}-years`}
                aria-invalid="false"
                aria-labelledby="legend-select-date">
                <option>Year</option>
                {years.map((year, index) => {
                  return <option key={index}>{year}</option>
                })}
              </select>

              <i className="icon icon-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default DateInput
