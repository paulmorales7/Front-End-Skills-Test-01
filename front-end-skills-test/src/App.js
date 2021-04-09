// import Courses from './components/courses/courses';
import Title from './components/title/title';
import Nav from './components/nav/nav';
// import Category from './components/category/category';
// import Wrapper from './components/wrapper/wrapper';
import Home from './components/home/index';
import StartUpCard from './components/startupCard/startupCard';
// import course from './courses.json';
// import startup from './startup.json';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

class App extends Component {

// state = {
//   course, startup
// };

  render(){
    
  return (
    <Router>
    <div className='App'> 
    <Nav />
    <Title />
  

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/startups' exact component={StartUpCard} />
      </Switch>
    </div>
</Router>
  )
}}

export default App;
