import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="social-links">
        <a href="https://github.com/jinnn0/" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jinyoung-jeong-457562140/" target="_blank">
          LinkedIn
        </a>
        <a href="/" target="_blank">
          Resume
        </a>
      </div>
      <div>&copy;{new Date().getFullYear()} Jinyoung Jeong</div>
    </footer>
  );
};

export default Footer;
