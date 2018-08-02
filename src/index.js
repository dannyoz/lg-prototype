import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/Home/Home'
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return <Home></Home>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
