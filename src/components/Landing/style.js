import styled from 'styled-components';

export const LandingContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-top: 10px;

  @media (min-height: 700px), (min-width: 950px) {
    scroll-snap-align: start;
  }
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 2rem;

    @media (min-height: 500px) {
      font-size: 6vw;
    }

    @media (min-height: 1200px) {
      font-size: 5vw;
    }

    @media (min-height: 1800px) {
      font-size: 4vw;
    }

    &:nth-of-type(1) {
      font-size: 2.7rem;

      @media (min-height: 500px) {
        font-size: 8vw;
      }

      @media (min-height: 1200px) {
        font-size: 7vw;
      }

      @media (min-height: 1800px) {
        font-size: 6vw;
      }
    }
  }
`;

export const HightLight = styled.h1`
  display: inline-block;
  position: relative;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(247, 238, 167, 0.783);
    z-index: -1;
    animation: showHighlight 0.5s ease 0.3s;
  }

  @keyframes showHighlight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const TypeMe = styled.h1`
  .type-me:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 60px;
    background: black;
    margin-left: 15px;
    animation: blink 0.6s infinite ease;
    transition: 0.3s ease;
    height: 2rem;

    @media (min-height: 500px) {
      height: 6vw;
    }

    @media (min-height: 1200px) {
      height: 4vw;
    }

    @media (min-height: 1800px) {
      height: 3vw;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ScrollLink = styled.a`
  height: 25px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  animation: fade-up 0.65s ease-in-out 3s 2;
  cursor: pointer;

  @keyframes fade-up {
    0% {
      transform: translate(-50%, 0);
    }

    50% {
      transform: translate(-50%, 50%);
    }

    100% {
      transform: translate(-50%, 0);
    }
  }
`;
