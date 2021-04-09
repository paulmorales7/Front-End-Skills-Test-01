import React, {useState, useEffect} from 'react';
import Wrapper from '../wrapper/wrapper';
import Courses from '../courses/courses'
import Category from '../category/category'
import course from '../../courses.json';
import Title from '../../components/title/title';

function Home () {
    const [courses, setCourses] = useState()
    useEffect(() => {
        setCourses(course)
    })
    return (
       
        <Wrapper>
             <Title />
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
