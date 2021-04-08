import React from 'react';
import './courses.css';


function courses(props) {

return (
    <div className='entire'>
    <h1 className='title'>My Courses</h1>
  
  <div className='card'>

<div className='content'>
<div className='image'></div>
<h2 className='intro'>{props.title}</h2>
<p className='para'>{props.para}</p>
<button className='button'>{props.learn}</button>
<h3 className='modules'>{props.modules}</h3>
<p className='completed'>{props.completed}</p>
</div>

  </div>


</div>

)
}

export default courses;

