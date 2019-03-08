import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';
import Marketing from './marketing/Marketing';
import Dashboard from './dashboard/Dashboard';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Marketing} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
