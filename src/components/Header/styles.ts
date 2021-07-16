import styled from 'styled-components';

import { darken, lighten } from 'polished';

export const Container = styled.header`
  min-height: 170px;
  border-bottom: 1px solid var(--shape);
  position: relative;
  padding: 3rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    position: absolute;
    left: 5rem;

    padding: 0.7rem;
    background: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;

    &:hover {
      border-color: ${darken(0.1, 'rgb(0, 127, 255)')};
      background: ${darken(0.1, 'rgb(0, 127, 255)')};
    }
  }
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    padding-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    
    input {
      width: 15rem;
      height: 3rem;
      padding-left: 1rem;
      font-size: 1rem;
      border: 1px solid var(--borders);
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  
    button {
      width: 4rem;
      height: 3rem;
      background: var(--blue);
      border: 1px solid var(--borders);
      border-top-right-radius: 0.25rem; 
      border-bottom-right-radius: 0.25rem; 

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color .2s ease-in-out;
      &:hover {
        background-color:  ${darken(0.1, 'rgb(0, 127, 255)')};
      }
    }
  }
`;

export const BoxUser = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 2px solid var(--blue);
  }
  

  a {
    color: var(--blue);
    text-decoration: none;
    transition: all .2s ease-in;
    border-bottom: 1px solid var(--blue);

    &:hover {
      color: ${lighten(0.2, 'rgb(0, 127, 255)')};
      border-bottom: 1px solid var(--blue);
    }
  }
`;