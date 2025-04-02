import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './Styles/globalStyle';

// const projects = [
//     { name: "Simple Calculator", 
//         url: "https://github.com/sarahpickering/24w5-calculator", 
//         description: `Building and styling this calculator while at 
//         Bloomtech was exciting and challenging. It reinforced my understanding of 
//         JavaScript logic and CSS styling while giving me hands-on 
//         experience with interactive user interfaces.` },
//     { name: "Building Web APIs", 
//         url: "https://github.com/sarahpickering/web-sprint-challenge-build-a-web-api",
//         description: `Learning APIs quickly became one of my favorite areas of study. 
//         I found the process of connecting and interacting with data both fascinating 
//         and highly rewarding. While challenging at times, it has significantly expanded 
//         my technical skills and deepened my understanding of web development.` }
// ];

const StyledLink = styled.a`
    color:#0000EE;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const MyProjects = () => (
    <SectionContainer id="projects">
        <h1>My Work</h1>
        <p>For specific projects, you can check out my GitHub, but I wanted to highlight 
            what I’ve enjoyed most about my web development journey. 
            I love the challenge of building APIs and structuring data efficiently to 
            create seamless interactions between the front and back end. 
            There’s something incredibly rewarding about debugging an issue, breaking it down, 
            and finding the best solution. I’ve particularly enjoyed working with 
            JavaScript and React on the front end, while using tools like Knex.js 
            for database management on the back end. Writing tests with Jest has proven to be
             an enjoyable challenge and a great way to reinforce the reliability of my code.</p>
             
            <p>Beyond the technical side, I value integrity and creativity in my work. I believe that clean, 
            well-structured code is just as important as building innovative solutions that enhance 
            user experiences. I enjoy thinking outside the box to solve problems efficiently while 
            maintaining a strong foundation of best practices. More than anything, 
            I love the process—solving complex problems, refining functionality, and continuously 
            learning new ways to improve my craft.</p>
    </SectionContainer>
);

export default MyProjects