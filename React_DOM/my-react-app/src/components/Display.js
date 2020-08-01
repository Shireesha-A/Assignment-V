import React from 'react';
import { Button } from 'react-bootstrap';


const Display=({courseDetails ,deleteCourse})=>{

    const courseList=courseDetails.length ? courseDetails.map( course=>{
        const{id,title,author,publisher}=course;
        return( 
            <div className="book" key={id}>
                <h3 class="b1">Book title : {title}</h3>
                <p>Book author : {author}</p>
                <p>Book publisher : {publisher}</p>
                
                <Button bsStyle="primary" onClick={ () => {deleteCourse(id)}}>Delete</Button>
            </div>
        )
    }): (<p className='waiting'>loading....</p>)



    return(
        <div className='display-course'>
            {courseList}
        </div>
    )
}

export default Display;