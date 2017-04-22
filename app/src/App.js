import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home/index';
import Overview from './pages/Overview/index';
import Campaigns from './pages/Campaigns/index';
import Intelligence from './pages/Intelligence/index';
import Support from './pages/Support/index';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Route exact path="/" component={Home}/>
          <Route path="/overview" component={Overview}/>
          <Route path="/campaigns" component={Campaigns}/>
          <Route path="/intelligence" component={Intelligence}/>
          <Route path="/support" component={Support}/>
      </div>
    );
  }
}

export default App;
