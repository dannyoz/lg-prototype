import React from 'react'
import {
  Button
} from '../dls/dls'

class InvestmentOptions extends React.Component {
  continue() {
    this.props.switchStep(3)
  }

  render() {
    return (
      <div className="application-step__body">
        <div className="form-field">
          <h4>Multi-index 3</h4>
          <p className="legal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur ligula nisi, et auctor velit pulvinar ut. Cras molestie nisi vitae diam tincidunt porta. Maecenas dictum, magna vitae venenatis tempor, sem enim facilisis est, a dignissim quam velit et erat. Nunc tempus erat sit amet est iaculis rhoncus.</p>
        </div>
        <div className="form-field">
          <Button styles={['cta', 'chevron']} onClick={this.continue.bind(this)}>Continue</Button>
        </div>
      </div>
    )
  }
}

export default InvestmentOptions
