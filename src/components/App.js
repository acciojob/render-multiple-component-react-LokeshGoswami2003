import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  return (
    <div id="main" className="ns-wrapper">
     <h1 data-ns-test="project-name">{props.name}</h1> 
     <h6 data-ns-test="project-description"> {props.description}</h6>
     </div>
  )
}


export default App;