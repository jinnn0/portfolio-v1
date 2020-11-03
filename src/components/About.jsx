import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="left">
          <div className="left__inner">
            <h2 className="title">About me</h2>
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
              <span>
                <strong>Tools I use: </strong>
              </span>
              <p>
                HTML, CSS / SCSS, JavaScript / ES6, React, Redux, REST API, GSAP, Canvas, Webpack, Git,
                GitHub, VSCode
              </p>

              <span>
                <strong>Others: </strong>
              </span>
              <p>I like to communicate, ask questions and solve problem.</p>
              <p>.. and I love music and film</p>
            </div>
          </div>
        </div>

        <div className="right">
          <a className="email" href="mailto: jinyoung.jeong20@gmail.com">
            jinyoung.jeong20@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
