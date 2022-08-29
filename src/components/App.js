import React, {Component, useState} from "react";
import '../styles/App.css';
import Header from'./SectionComp';
import section from'./HeaderComp';

const App = () => {
  return (
    <div id="main"></div>
    <Header></Header>
    <section></section>
  )
}


export default App;
