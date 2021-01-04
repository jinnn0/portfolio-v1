import React from 'react';
import { FooterContainer, SocialLinks } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/jinnn0/" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jinyoung-jeong-457562140/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>

        <a href="./CV.pdf" rel="noreferrer" target="_blank">
          CV
        </a>
      </SocialLinks>

      <div>&copy;{new Date().getFullYear()} Jinyoung Jeong</div>
    </FooterContainer>
  );
};

export default Footer;
