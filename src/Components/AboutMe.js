import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle, SectionText } from './Styles/globalStyle';
import profilePic from '../Media/logo.png';

const EntireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ProfilePicture = styled.img`
  border-radius: 5%;
  border: 4px solid #2B2B28;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 30px 0;
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
`;


const AboutMe = () => (
    <SectionContainer>
        <EntireContainer id="about">
        <h1>Welcome, I'm Sarah!</h1>
        <ProfilePicture src ={profilePic} alt="logo" />
        <p>My name is Sarah Pickering and 
        I am a software engineer based in Surprise, AZ. 
        I'm a nerdy mom and real estate agent who has a 
        passion for helping others, problem solving, 
        and creating. Outside of work, I love spending time 
        with my family. I love reading, and if I have a book in 
        front of me, it's probably a thriller or mystery. I also 
        enjoy working out, specifically on my Peloton bike! </p>
        </EntireContainer>
    </SectionContainer>
    )

export default AboutMe