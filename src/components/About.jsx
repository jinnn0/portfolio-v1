import React from 'react';

const About = () => {
  return (
    <div class="about-container">
      <div class="about">
        <div className="left">
          <h2 className="about__title">About me</h2>
          <div className="intro">
            <div>
              <p>
                I'm a <strong>Frontend</strong> devloper, a proud <strong>music</strong> graduate
              </p>
              <p>who found a love for web development.</p>
              <p>I'd love to be part of your exciting journey of building web apps. </p>
            </div>
          </div>

          <div className="skills">
            <p>
              <strong>Tools I use: </strong>
            </p>
            <p>
              HTML, CSS / SCSS, JavaScript / ES6, React, Redux, REST API, GSAP, Canvas, Webpack, Git, GitHub,
              VSCode
            </p>
            <p>
              <strong>Others: </strong>
            </p>
            <p>I like to communicate, ask questions and solve problem.</p>
            <p>.. and I love music and film</p>
          </div>
        </div>

        <div className="right">
          <a className="email" href="mailto: jinyoung.jeong20@gmail.com">
            jinyoung.jeong20@gmail.com
          </a>
        </div>
      </div>

      <a href="#projects" class="scroll-up">
        <div>see the projects again ?</div>
      </a>
    </div>
  );
};

export default About;
