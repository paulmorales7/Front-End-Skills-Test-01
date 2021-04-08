import React from 'react';
import './courses.css';

// import border from '../../images/border.png';

function courses(props) {

return (
    <div className='entire'>
    <h1 className='title'>My Courses</h1>
  
  <div className='card'>

<div className='content'>
<p>{props.earn}</p>
<h2>{props.title}</h2>
<p>{props.para}</p>
<button>{props.learn}</button>
<h3>{props.modules}</h3>
<p>{props.completed}</p>
</div>

  </div>


</div>

)
}

export default courses;

