import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">

       

      <Route exact path="/" component={Home} />
      <Route exact path="/about" history={props.history} component={About} />
      <Route exact path="/skills" history={props.history} component={Skills} />
      <Route exact path="/projects" history={props.history} component={Projects} />
      {/* <Route path="/contact" history={props.history} component={Contact} /> */}

      </header>
      
       </div>
  );
}

export default App;
