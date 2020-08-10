import React,{Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import{Link,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Covid from './components/Header';
import Meta from './components/Metaw';
import './App.css';

class App extends Component {
  render(){
    return (
      /*
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Covid </Link></li>
              <li><Link to={'/Metaw'} className="nav-link">Meta</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Covid} />
            <Route path='/Metaw' component={Meta} />
          </Switch>
        </div>
     </BrowserRouter>
     */
      <div className="App">
        /*<Meta/> */
        <Covid/>
      </div>
    );
  }
} 

export default App;

