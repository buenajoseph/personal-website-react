import React, { Component, useState}  from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact';
import "./App.css";


function App() {
  const [navContactOpen, setNavContactOpen] = useState(false);


  return (
    <div className="app">
      <Navbar navContactOpen={navContactOpen} setNavContactOpen={setNavContactOpen}></Navbar>
      <div className="main-body">
        <Intro className="first"></Intro>
        <Education className="after"></Education>
        <Projects className="after"></Projects>
        <Experience className="after"></Experience>
        <Contact className="after"></Contact>
      </div>
    </div>
  );
}

export default App;
