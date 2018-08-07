import React from 'react'

class ApplicationStep extends React.Component {

  switchStep() {
    this.props.switchStep(this.props.step)
  }

  render() {
    const currentStep = this.props.step === this.props.currentStep

    return (
      <div className="application-step">
        <h2 onClick={this.switchStep.bind(this)}>
          <span className="application-step__number">{this.props.step}</span>
          <span> {this.props.title}</span>
        </h2>
        {currentStep && 
          <div className="application-step__body">{this.props.children}</div>
        }
      </div>
    )
  }
}

export default ApplicationStep
