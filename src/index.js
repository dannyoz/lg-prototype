import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextInput from './components/TextInput/TextInput';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    const formProps = {
      placeholder: 'Please enter your name'
    }

    return (
      <div className="container">
        <TextInput {...formProps} onChange={this.handleChange.bind(this)}>Name</TextInput>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
