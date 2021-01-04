import React from 'react';
import { AboutContainer, AboutInner, AboutLeft, Title, Skills, AboutRight } from './style';

const About = () => {
  return (
    <AboutContainer>
      <AboutInner>
        <AboutLeft>
          <Title>About me</Title>
          <div>
            <p>
              I'm a <strong>Frontend</strong> developer, a proud <strong>music</strong> graduate
            </p>
            <p>who found a love for web development.</p>
            <p>I'd love to be part of your exciting journey of building web apps. </p>
          </div>

          <Skills>
            <span>
              <strong>Skills & tools: </strong>
            </span>
            <p>
              HTML, CSS / SCSS, JavaScript / ES6, React, Redux, REST API, GSAP, Canvas, Webpack, Git, GitHub,
              VSCode
            </p>

            <span>
              <strong>Others: </strong>
            </span>
            <p>I like to communicate, ask questions and solve problem.</p>
            <p>.. and I love music and film</p>
          </Skills>
        </AboutLeft>

        <AboutRight className="right">
          <a className="email" href="mailto: jinyoung.jeong20@gmail.com">
            jinyoung.jeong20@gmail.com
          </a>
        </AboutRight>
      </AboutInner>
    </AboutContainer>
  );
};

export default About;
