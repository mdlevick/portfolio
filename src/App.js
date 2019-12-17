import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">

       

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/project" component={Projects} />
      <Route path="/contact" component={Contact} />

      </header>
      
       </div>
  );
}

export default App;
