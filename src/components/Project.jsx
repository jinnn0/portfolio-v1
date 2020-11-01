import React from 'react';
import ghIcon from '../images/gitHub.png';

const Project = ({ project }) => {
  return (
    <section className="project-container" id="projects">
      <div className="project">
        <div className="project__img">
          <a href={project.projectLink} target="_blank">
            <img src={project.img} alt={project.alt} className="lazyload" />
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
                <img className="gh-icon" src={ghIcon} alt="gitHub logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
