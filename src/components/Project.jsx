import React, { useEffect, useRef } from 'react';
import ghLogo from '../assets/images/logo/gitHub.png';

const Project = ({ project }) => {
  const video = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const documentBottom = window.innerHeight;
      const videoFullHeight = video.current.offsetHeight;
      const videoTop = video.current.getBoundingClientRect().top;

      if (0 < videoTop && videoTop < documentBottom - videoFullHeight) {
        video.current.play();
      } else {
        video.current.pause();
        video.current.currentTime = 0;
      }
    });
  }, []);

  return (
    <section className="project-container" id="projects">
      <div className="project">
        <div className="project__img">
          <a href={project.projectLink} target="_blank">
            <video ref={video} playsInline loop muted poster={project.poster}>
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
              <a href={project.sourceCode} target="_blank">
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
