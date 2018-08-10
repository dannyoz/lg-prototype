import React from 'react'
import ApplicationStep from '../../components/ApplicationStep/ApplicationStep'
import LetsStartInvesting from '../../components/LetsStartInvesting/LetsStartInvesting'
import InvestmentOptions from '../../components/InvestmentOptons/InvestmentOptions'
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
          <LetsStartInvesting {...{switchStep}}></LetsStartInvesting>
        </ApplicationStep>
        <ApplicationStep {...{step: 2, title: 'Investment options', currentStep, switchStep}}>
          <InvestmentOptions {...{switchStep}}></InvestmentOptions>
        </ApplicationStep>
        <ApplicationStep {...{step: 3, title: 'Personal Details', currentStep, switchStep}}>
          <PersonalDetails {...{switchStep}}></PersonalDetails>
        </ApplicationStep>
        <ApplicationStep {...{step: 4, title: 'Payment Details', currentStep, switchStep}}>
          <Payment {...{switchStep}}></Payment>
        </ApplicationStep>
      </div>
    )
  }
}

export default Demo
