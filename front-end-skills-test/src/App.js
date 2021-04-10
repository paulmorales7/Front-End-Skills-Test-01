import Nav from './components/nav/nav';
import Home from './components/home/index';
import Page from './components/startupPage/page';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

class App extends Component {

  render(){
    
  return (
    <Router>
    <div className='App'> 
    <Nav />

  

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/startups' exact component={Page} />
      </Switch>
    </div>
</Router>
  )
}}

export default App;
