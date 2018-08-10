import React from 'react'

class ApplicationStep extends React.Component {

  switchStep() {
    this.props.switchStep(this.props.step)
  }

  render() {
    const currentStep = this.props.step === this.props.currentStep
    const completed = this.props.step < this.props.currentStep

    const applyClass = prefix => {
      const completedClass = (completed) ? ` ${prefix}--completed` : ''
      const currentClass = (currentStep) ? ` ${prefix}--current` : ''
      return `${prefix}${completedClass}${currentClass}`
    }

    return (
      <div className={applyClass('application-step')}>
        <h3 className="application-step__title" onClick={this.switchStep.bind(this)}>
          <span className={applyClass('application-step__number')}>{this.props.step}</span>
          <span> {this.props.title}</span>
        </h3>
        {currentStep && this.props.children}
      </div>
    )
  }
}

export default ApplicationStep
