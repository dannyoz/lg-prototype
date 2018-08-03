import React from 'react'

class Toggle extends React.Component {
  handleClick(event) {
    this.props.onClick(event)
  }

  render() {
    return (
      <div className="form-field">
        <label className="switch">
          <input type="checkbox" className="switch-input" onClick={this.handleClick.bind(this)} />
          <span className="access">Toggle label</span>
          <span className="switch-focus" aria-hidden="true"></span>
          <span className="switch-handle" aria-hidden="true"></span>
          <span className="switch-toggle switch-toggle-on" aria-hidden="true">Yes</span>
          <span className="switch-toggle switch-toggle-off" aria-hidden="true">No</span>
        </label>
      </div>
    )
  }
}

export default Toggle
