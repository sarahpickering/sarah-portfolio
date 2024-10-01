import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
import MyProjects from './Components/MyProjects'
import LandingPage from './Components/LandingPage'

const RoutesComponent = () => {
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/navigation" element={<NavBar />} />
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element ={<App />} />
        </Routes>
    </Router>
}

export default RoutesComponent