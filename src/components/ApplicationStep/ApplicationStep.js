import React from 'react'

class ApplicationStep extends React.Component {

  switchStep() {
    this.props.switchStep(this.props.step)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.switchStep.bind(this)}>
          <span>{this.props.step}</span>
          <span> Title goes here</span>
        </h1>
      </div>
    )
  }
}

export default ApplicationStep
