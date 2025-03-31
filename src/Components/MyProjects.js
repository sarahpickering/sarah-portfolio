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
   // { name: "Project 2", url: "https://github.com/yourusername/project2" }
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