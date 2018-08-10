import React from 'react'

const delay = 800
const transitionDuration = `${delay / 1000}s`

class ApplicationStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollHeight: 0,
      animState: ''
    }
  }

  componentDidMount() {
    this.scrollHeight = this.refs.panel.scrollHeight + 50
    const currentStep = this.props.step === this.props.currentStep
    this.stepStateHandler(currentStep)
  }

  componentWillReceiveProps(props) {
    const currentStep = props.step === props.currentStep
    this.stepStateHandler(currentStep)
  }

  stepStateHandler(currentStep) {
    const self = this
    const scrollHeight = (currentStep) ? this.scrollHeight : 0
    const animState = currentStep ? 'hidden' : 'exit'
    this.setState({ scrollHeight, animState })
    setTimeout(() => {
      self.setState({ animState: 'open' })
    }, delay / 2)
  }

  switchStep() {
    this.stepStateHandler(true)
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
    const style = {
      maxHeight: this.state.scrollHeight,
      padding: currentStep ? '1rem 0' : '0',
      transitionDuration
    }

    const panelClass = `application-step__panel${this.state.animState ? ' application-step__panel--' + this.state.animState : ''}`

    return (
      <div className={applyClass('application-step')}>
        <h3 className="application-step__title" onClick={this.switchStep.bind(this)}>
          <span className={applyClass('application-step__number')}>{this.props.step}</span>
          <span> {this.props.title}</span>
        </h3>
        <div ref="panel" style={style} className={panelClass}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ApplicationStep
