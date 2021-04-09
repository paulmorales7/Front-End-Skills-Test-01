import Nav from './components/nav/nav';
import Home from './components/home/index';
import StartUpCard from './components/startupCard/startupCard';
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
        <Route path='/startups' exact component={StartUpCard} />
      </Switch>
    </div>
</Router>
  )
}}

export default App;
