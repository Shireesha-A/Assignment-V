import React from 'react';
import Display from './components/Display';
import Navbar from './components/Navbar';
import AddCourse from './components/AddCourse';
import display from './components/display.css';


class App extends React.Component{
    state={
        courseDetails:[
            {id:1,title:'A Suitable Boy',author:' VikramSeth',publisher:'Orion publising group'},
            {id:2,title:'My Early Life',author:'M K Gandhi',publisher:'Scribners son ,Newyork'},
           {id:3,title:'Prison Diary',author:'Jayaprakash Narayan',publisher:'Farooq Argali Janata Pocket books'},
           {id:4,title:' Life is a Journey',author:'Harris Walbort Roy',publisher:'James Williams sons and crooks'}
        ]
    }  
    
    addCourse=(courseDetail)=>
    {
      
        courseDetail.id=5 + (Math.floor(Math.random()*100  ) ) ;
        let courseDetails=[...this.state.courseDetails,courseDetail];
        this.setState({
            courseDetails:courseDetails
        })
    }

    deleteCourse=(id)=>{
        let newList=this.state.courseDetails.filter((course) =>{
            return course.id !==id
        })
        this.setState({
            courseDetails:newList
        })
    }

    render(){
        return(
            <div className="App">
                <Navbar heading='TODO APP'></Navbar>
               
                <Display courseDetails={this.state.courseDetails} deleteCourse={this.deleteCourse}/>
               
                <AddCourse addCourse={this.addCourse}></AddCourse>
                
            </div>
        );

}
}
export default App;
