import React from "react";
import {NavLink} from 'react-router-dom';
import ThemeToggle from "./ThemeToggle";
//import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar"

function NavigationBar() {
    return (
        <nav className="navbar">
            
            <div className="navbar__links">
                <NavLink to="/"className="navbar__links-link">Home</NavLink>
                <NavLink to="/about" className="navbar__links-link">About</NavLink>
                <NavLink to="/worksection" className="navbar__links-link">Work</NavLink>
                <NavLink to="/contactsection" className="navbar__links-link">Contact</NavLink>
            </div>
            <ThemeToggle/>
        </nav>
        
    )
}

export default NavigationBar;