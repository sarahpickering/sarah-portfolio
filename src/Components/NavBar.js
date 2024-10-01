import React from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import Contact from './Contact'
import MyProjects from './MyProjects'


const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/AboutMe">About Me</Link><br></br>
            <Link to="/MyProjects">My Projects</Link><br></br>
            <Link to="/Contact">Contact Me</Link><br></br>
        </nav>
    )
}

export default NavBar;