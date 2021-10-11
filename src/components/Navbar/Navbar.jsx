import React, { Component }  from 'react';
import "./Navbar.css";
import {Person, Close, Phone, Email, GitHub} from '@material-ui/icons';

export default function Navbar({navContactOpen, setNavContactOpen}) {
    return (
        <div className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <a href="#intro" className="nav-brand">JTB</a>
                </div>
                <div className="nav-right">
                    <div className={"contact-info " + (navContactOpen && "active")}>
                        <Phone className="contact-icon"></Phone> <span className="contact-text" >+1 (510) 427-2571</span>
                        <Email className="contact-icon"></Email><span className="contact-text" >buenajosepht@gmail.com</span> 
                        <GitHub className="contact-icon"></GitHub><span className="contact-text" ><a href="https://www.github.com/buenajoseph">github.com/buenajoseph</a></span>
                        
                    </div>
                    <Person className={"icon " + (!navContactOpen && "active")} onClick={() => setNavContactOpen(!navContactOpen)}></Person>
                    <Close className={"icon " + (navContactOpen && "active")} onClick={() => setNavContactOpen(!navContactOpen)}></Close>
                </div>
            </div>
        </div>
    )

}
