import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.header`
  border-bottom: 1px solid var(--shape);
  position: relative;
  padding: 3rem 0%;

  display: flex;
  align-items: center;
  justify-content: center;
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