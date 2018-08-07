import React from 'react'
import ApplicationStep from '../../components/ApplicationStep/ApplicationStep'
import LetsStartInvesting from '../../components/LetsStartInvesting/LetsStartInvesting'
import Payment from '../../components/Payment/Payment'
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails'

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStep: 1
    }
  }

  switchStep(currentStep) {
    this.setState({ currentStep })
  }

  render() {

    const currentStep = this.state.currentStep
    const switchStep = this.switchStep.bind(this)

    return (
      <div className="container">
        <ApplicationStep {...{step: 1, title: 'Lets start', currentStep, switchStep}}>
          <LetsStartInvesting></LetsStartInvesting>
        </ApplicationStep>
        <ApplicationStep {...{step: 2, title: 'Payment', currentStep, switchStep}}>
          <Payment></Payment>
        </ApplicationStep>
        <ApplicationStep {...{step: 3, title: 'Personal Details', currentStep, switchStep}}>
          <PersonalDetails></PersonalDetails>
        </ApplicationStep>
      </div>
    )
  }
}

export default Demo
