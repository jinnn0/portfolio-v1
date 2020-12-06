import styled from 'styled-components';

export const AboutContainer = styled.section`
  @media (min-height: 700px), (min-width: 950px) {
    scroll-snap-align: start;
  }

  @media (min-width: 950px) {
    scroll-snap-align: center;
    min-height: 700px;
    height: 100vh;
    display: flex;
    align-items: center;
  }
`;

export const AboutInner = styled.div`
  @media (min-width: 950px) {
    height: 35vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1200px) {
    width: 85vw;
    height: 428px;
  }

  @media (min-width: 1500px) {
    width: 80vw;
  }

  @media (min-width: 1800px) {
    width: 75vw;
  }
`;

export const AboutLeft = styled.div`
  height: 428px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 3rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 950px) {
    flex-basis: 50%;
    height: 100%;
    font-size: 1.5vw;
    text-align: start;
    padding-right: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    height: 428px;
    font-size: 1.25vw;
  }

  @media (min-width: 1500px) {
    font-size: 1.1vw;
  }

  @media (min-width: 1800px) {
    font-size: 0.9vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 950px) {
    text-align: start;
    margin-bottom: 0;
  }
`;

export const Skills = styled.div`
  font-size: 0.85em;

  p {
    width: 85%;
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 950px) {
      max-width: 650px;
      margin: 0;
    }
  }

  p:nth-child(2) {
    margin-bottom: 1rem;
  }
`;

export const AboutRight = styled.div`
  width: auto;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.144);
  border-radius: 20px;

  @media (min-width: 500px) {
    width: 450px;
  }

  @media (min-width: 950px) {
    flex-basis: 50%;
    height: 428px;
  }
`;
