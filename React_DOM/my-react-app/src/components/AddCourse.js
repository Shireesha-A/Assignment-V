import React from 'react';
import './display.css';
class AppForm extends React.Component{
    state={
        title:'',
        author:'',
        publisher:'',
        
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.id] : event.target.value
        });
    }
    handleKeyPress = (e)=> {
        
        if (e.key === "Enter") {
            this.props.addCourse(this.state);
            this.setState({
                title:'',
                author:'',
                publisher:'',
            
            })
        }

      }
     
    
    render(){
        return(
            <form className="form-element" >
                <label htmlFor='title'>title</label><br/>
                <input type='text' id='title'placeholder='enter title:'onChange={this.handleChange} 
                value={this.state.title}></input><br/>

                <label htmlFor='author'>Author</label><br/>
                <input type='text' id='author'placeholder='enter author name:'onChange={this.handleChange}
                value={this.state.author}></input><br/>

                <label htmlFor='publisher'>Publisher</label><br/>
                <input type='text' id='publisher'placeholder='enter publisher name:'onChange={this.handleChange}
                value={this.state.publisher}

                onKeyPress={this.handleKeyPress}></input><br/>
            </form>
        )
    }
}
export default AppForm;