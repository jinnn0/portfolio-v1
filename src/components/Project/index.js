import React, { useEffect, useRef } from 'react';
import ghLogo from '../../assets/images/icons/gitHub.png';
import {
  ProjectContainer,
  ProjectInner,
  ProjectImage,
  Video,
  ProjectDesc,
  Title,
  Desc,
  CodeInfo,
  SourceCodeContainer,
  SourceCodeLink,
  GitHubIcon
} from './style';

const Project = ({ project }) => {
  const videoRef = useRef();

  useEffect(() => {
    document.addEventListener(
      'scroll',
      () => {
        const documentBottom = window.innerHeight;
        const videoFullHeight = videoRef.current.offsetHeight;
        const videoTop = videoRef.current.getBoundingClientRect().top;

        // play video only when the video is inside the clientview
        if (0 < videoTop && videoTop < documentBottom - videoFullHeight) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      },
      true
    );
  }, []);

  return (
    <ProjectContainer id={project.title}>
      <ProjectInner>
        <ProjectImage>
          <a href={project.projectLink} rel="noreferrer" target="_blank">
            <Video ref={videoRef} playsInline loop muted poster={project.poster} data-name={project.title}>
              <source src={project.video} />
            </Video>
          </a>
        </ProjectImage>

        <ProjectDesc>
          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>

          <CodeInfo>
            <p>Stacks used : {project.stacks}</p>
            <SourceCodeContainer>
              <SourceCodeLink href={project.sourceCode} rel="noreferrer" target="_blank">
                See the source code
                <GitHubIcon src={ghLogo} alt="gitHub logo" />
              </SourceCodeLink>
            </SourceCodeContainer>
          </CodeInfo>
        </ProjectDesc>
      </ProjectInner>
    </ProjectContainer>
  );
};

export default Project;
