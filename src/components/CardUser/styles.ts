import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  width: 250px;
  min-height: 360px;

  background: var(--shape-hover);

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  h1 {
    max-width: 180px;
    text-align: center;
    font-size: 1.3rem;
    padding: 0.8rem ;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--blue);
    transition: color .2s ease-in-out;

    &:hover {
      color: ${lighten(0.3, 'rgb(0, 127, 255)')};
    }
  }
`;