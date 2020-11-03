import React, { useEffect, useRef } from 'react';
import ghLogo from '../assets/images/logo/gitHub.png';

const Project = ({ project }) => {
  const videoRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const documentBottom = window.innerHeight;
      const videoFullHeight = videoRef.current.offsetHeight;
      const videoTop = videoRef.current.getBoundingClientRect().top;

      if (0 < videoTop && videoTop < documentBottom - videoFullHeight) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    });
  }, []);

  return (
    <section id={project.title} data-name={project.title} className="project-container">
      <div className="project">
        <div className="project__img">
          <a href={project.projectLink} rel="noreferrer" target="_blank">
            <video ref={videoRef} playsInline loop muted poster={project.poster}>
              <source src={project.video} />
            </video>
          </a>
        </div>

        <div className="project__desc">
          <h2 className="title">{project.title}</h2>
          <p className="desc">{project.description}</p>

          <div className="code-info">
            <p className="stacks">Stacks used : {project.stacks}</p>
            <div className="source-code">
              <a href={project.sourceCode} rel="noreferrer" target="_blank">
                See the source code
                <img className="gh-icon" src={ghLogo} alt="gitHub logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
