import React, { Component }  from 'react';
import "./Intro.css";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro-left">
                <div className="background"></div>
                <div className="wrapper">
                    <h1>Joseph Tyler Buenaventura</h1>
                    <h3>Software Engineer</h3>
                </div>
            </div>
            <div className="intro-right">
                <div className="img-container">
                    <img src="img/me.png" alt="Picture of joseph"></img>
                </div>  
            </div>
        </div>
    )
}
