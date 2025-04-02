import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #F8F8F8; // Background Color
  color: #323232; // Secondary text color
  padding: 20px 0;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  color: #323232; // Medium Grey for readability
  font-size: 1.6rem;
  margin: 0;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SocialLinksContainer = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #0000EE; // link color
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; {new Date().getFullYear()} Sarah Pickering. All Rights Reserved.</FooterText>
    <SocialLinksContainer>
      <SocialLink href="mailto:SarahPWebDev@Gmail.com" aria-label="Email">Email</SocialLink>
      <SocialLink href="https://www.linkedin.com/in/sarah-pickering-3b454748/" aria-label="LinkedIn">LinkedIn</SocialLink>
      <SocialLink href="https://github.com/sarahpickering" aria-label="GitHub">GitHub</SocialLink>
    </SocialLinksContainer>
  </FooterContainer>
);

export default Footer;