import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects';
import LandingPage from './Components/LandingPage';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Define global styles
const GlobalStyle = createGlobalStyle`
  body, h1, nav, a {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
`;

// Define main content container
const MainContent = styled.div`
  padding-bottom: 100px;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}

      <Router>
        {/* Header and NavBar should only be rendered once here */}
        <Header /> 
        <NavBar /> 

        <MainContent>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
      </Router>
    </>
  );
}

export default App;
