import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/jinnn0/" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jinyoung-jeong-457562140/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        {/* <a href="/" rel="noreferrer" target="_blank">
          Resume
        </a> */}
      </div>
      <div>&copy;{new Date().getFullYear()} Jinyoung Jeong</div>
    </footer>
  );
};

export default Footer;
