import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  > h1 {
    margin: 1rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding-bottom: 4rem;
`;

export const Card = styled.div`
  max-width: 430px;
  border: 1px solid var(--shape);
  border-radius: 0.30rem;
  padding: 1.5rem;

  > p {
    min-height: 4rem;
    margin: 1rem;
    text-align: left;
    line-height: 1.5rem;
  }
`;

export const Title = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    color: var(--blue);

    transition: color .2s ease-in-out;
    &:hover {
      color: ${lighten(0.3, 'rgb(0, 127, 255)')};
    }
  }
`;

export const Datas = styled.div`
  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      p {
        font-weight: 600;
        color: var(--white);
        
        span {
          font-weight: 400;
          color: var(--support);
          padding-right: 0.5rem;
        }
      }
    }
  }
`;