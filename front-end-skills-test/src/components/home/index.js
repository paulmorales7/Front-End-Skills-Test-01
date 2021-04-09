import React, {useState, useEffect} from 'react';
// import './startup.json';
import Wrapper from '../wrapper/wrapper';
import Courses from '../courses/courses'
import Category from '../category/category'
import course from '../../courses.json';

function Home () {
    const [courses, setCourses] = useState()
    useEffect(() => {
        setCourses(course)
    })
    return (
        <Wrapper>
            {courses&&courses.map(cor => {                
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
        < Category />

        </Wrapper>
    )
}

export default Home;
