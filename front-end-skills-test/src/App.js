import Courses from './components/courses/courses';
import Title from './components/title/title';
import Nav from './components/nav/nav';
import Wrapper from './components/wrapper/wrapper';
import course from './courses.json';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

state = {
  course
};

  render(){
    
  return (
    <div className='App'> 
   <Nav />
  <Title />

<Wrapper>
  {this.state.course.map(cor => {
    console.log(cor.image)
    return(
    
    <Courses 
key={cor.id}
earn={cor.earn}
title={cor.title}
para={cor.para}
learn={cor.learn}
modules={cor.modules}
completed={cor.completed}
/>



    )
  })}
</Wrapper>

</div>

  )
}}

export default App;
