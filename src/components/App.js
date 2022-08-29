import React, {Component, useState} from "react";
import '../styles/App.css';
import Header from'./SectionComp';
import Section1 from'./HeaderComp';

const App = () => {
  return (
    <div id="main">
    <Header></Header>
    <Section1></Section1>
    </div>
  )
}


export default App;
