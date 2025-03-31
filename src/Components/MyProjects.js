import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './Styles/globalStyle';

const projects = [
    { name: "Simple Calculator", 
        url: "https://github.com/sarahpickering/24w5-calculator", 
        description: `Building and styling this calculator was an exciting 
        challenge during my studies. It reinforced my understanding of 
        JavaScript logic and CSS styling while giving me hands-on 
        experience with interactive user interfaces.` },
   // { name: "Project 2", url: "https://github.com/yourusername/project2" }
];

const StyledLink = styled.a`
    color: #2B2B28;
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
            <p key={index}>
                <StyledLink href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                </StyledLink>
            </p>
        ))}
    </SectionContainer>
);

export default MyProjects