import styled from 'styled-components';

export const ProjectContainer = styled.section`
  min-height: 700px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-height: 700px), (min-width: 950px) {
    scroll-snap-align: center;
  }

  @media (min-width: 950px) {
    margin-bottom: 0;
  }
`;

export const ProjectInner = styled.div`
  width: 100%;
  height: 600px;

  @media (min-width: 950px) {
    height: 35vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1200px) {
    width: 85vw;
  }

  @media (min-width: 1500px) {
    width: 80vw;
    height: 27vw;
  }

  @media (min-width: 1800px) {
    width: 70vw;
    height: 20vw;
  }
`;

export const ProjectImage = styled.div`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.144);
  border-radius: 20px;
  height: 50%;

  @media (min-width: 500px) {
    width: 450px;
    margin: 0 auto;
  }

  @media (min-width: 950px) {
    width: 100%;
    height: 100%;
    flex-basis: 50%;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  transition: transform 0.1s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.2rem;
  font-size: 0.8rem;
  height: 50%;

  @media (min-width: 500px) {
    font-size: 0.9rem;
  }

  @media (min-width: 950px) {
    font-size: 1.5vw;
    width: 100%;
    height: 100%;
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    font-size: 1.25vw;
  }

  @media (min-width: 1500px) {
    font-size: 1.1vw;
  }

  @media (min-width: 1800px) {
    font-size: 0.8vw;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
`;

export const Desc = styled.p`
  width: 100%;
  max-width: 500px;
  line-height: 1.35rem;
  text-align: center;

  @media (min-width: 500px) {
    width: 90%;
    line-height: 2rem;
  }

  @media (min-width: 950px) {
    width: 80%;
    max-width: none;
    line-height: 2em;
  }
`;

export const CodeInfo = styled.div`
  text-align: center;
`;

export const SourceCodeContainer = styled.div`
  margin-top: 10px;

  @media (min-width: 950px) {
    margin-top: 20px;
  }
`;

export const SourceCodeLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GitHubIcon = styled.img`
  width: 13px;
  margin-left: 15px;

  @media (min-width: 500px) {
    width: 1.3vw;
  }
`;
