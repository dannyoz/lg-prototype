import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/Home/Home'
import Demo from './containers/Demo/Demo'
import LetsStartInvesting from './containers/LetsStartInvesting/LetsStartInvesting'
import Payment from './containers/Payment/Payment'
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/lets-start-investing" component={LetsStartInvesting} />
      <Route path="/payment" component={Payment} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
