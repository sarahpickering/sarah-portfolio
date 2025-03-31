import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './Styles/globalStyle';

const projects = [
    { name: "Simple Calculator", 
        url: "https://github.com/sarahpickering/24w5-calculator", 
        description: `Building and styling this calculator while at 
        Bloomtech was exciting and challenging. It reinforced my understanding of 
        JavaScript logic and CSS styling while giving me hands-on 
        experience with interactive user interfaces.` },
    { name: "Building Web APIs", 
        url: "https://github.com/sarahpickering/web-sprint-challenge-build-a-web-api",
        description: `Learning APIs quickly became one of my favorite areas of study. 
        I found the process of connecting and interacting with data both fascinating 
        and highly rewarding. While challenging at times, it has significantly expanded 
        my technical skills and deepened my understanding of web development.` }
];

const StyledLink = styled.a`
    color:#0000EE;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const MyProjects = () => (
    <SectionContainer>
        <h1>My Favorite Projects:</h1>
        {projects.map((project, index) => (
            <div key={index}>
                <p>
                <StyledLink href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                </StyledLink>
                </p>
                {project.description && <p>{project.description}</p>}
                </div>
        ))}
    </SectionContainer>
);

export default MyProjects