import React from 'react';

const Landing = () => {
  return (
    <div className="landing wrapper">
      <div className="texts">
        <h1 data-aos="fade-right">Hey,</h1>
        <h1 data-aos="fade-right" data-aos-delay="100">
          <div className="highlight">I'm Jinyoung,</div>
        </h1>
        <h1 data-aos="fade-right" data-aos-delay="150" className="h1 typing js-typing"></h1>
      </div>

      <a href="#projects" className="scroll">
        <div>recent projects</div>
      </a>
    </div>
  );
};

export default Landing;
