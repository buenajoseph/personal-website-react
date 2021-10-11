import React, { Component, useState}  from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import "./App.css";


function App() {
  const [navContactOpen, setNavContactOpen] = useState(false);


  return (
    <div className="app">
      <Navbar navContactOpen={navContactOpen} setNavContactOpen={setNavContactOpen}></Navbar>
      <div className="main-body">
        <Intro className="first"></Intro>
        <Career className="after"></Career>
        <Contact className="after"></Contact>
        <div className="foot">
          <p>&copy; All rights reserved. Joseph Buenaventura 2021</p>
        </div>
      </div>
    </div>
  );
}

export default App;
