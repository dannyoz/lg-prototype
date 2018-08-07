import React from 'react'
import ApplicationStep from '../../components/ApplicationStep/ApplicationStep'

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStep:1
    }
  }

  switchStep(step) {
    console.log(step)
  }

  render() {
    return (
      <div>
        <ApplicationStep step={1} onClick={this.switchStep.bind(this)}></ApplicationStep>
        <ApplicationStep step={2} onClick={this.switchStep.bind(this)}></ApplicationStep>
        <ApplicationStep step={3} onClick={this.switchStep.bind(this)}></ApplicationStep>
        <ApplicationStep step={4} onClick={this.switchStep.bind(this)}></ApplicationStep>
        <ApplicationStep step={5} onClick={this.switchStep.bind(this)}></ApplicationStep>
      </div>
    )
  }
}

export default Demo
