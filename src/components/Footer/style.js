import styled from 'styled-components';

export const FooterContainer = styled.section`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  @media (min-height: 700px), (min-width: 950px) {
    scroll-snap-align: start;
  }
`;

export const SocialLinks = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (min-width: 950px) {
    margin-bottom: 50px;
  }

  a {
    height: 25px;

    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;
