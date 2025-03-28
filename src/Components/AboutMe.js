import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle, SectionText } from './Styles/globalStyle';


const EntireContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color:rgb(247, 247, 251);
  padding: 10px;
`;

const AboutMe = () => (
    <SectionContainer>
        <EntireContainer id="about">
        <p>Welcome! My name is Sarah Pickering and 
        I am a software engineer based in Surprise, AZ. 
        I'm a nerdy mom and real estate agent who has a 
        passion for helping others, problem solving, 
        and creating. Outside of work, I love spending time 
        with my husband and two kids (Madelyn and Maximus). 
        I love reading, and if I have a book in front of me, 
        it's probably a thriller or mystery. I also enjoy working out, 
        specifically on my Peloton bike! </p>
        </EntireContainer>
    </SectionContainer>
    )

export default AboutMe