import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  min-width: 350px;
  width: max-content;
  padding: 1rem;
  background: var(--shape);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  div.separator {
    width: 100%;
    height: 1px;
    background: var(--blue);
  }
`; 

export const UserInfo = styled.div`
  width: 100%;
  background: var(--shape-hover);
  border-radius: 0.35rem;
  padding: 1.5rem;

  ul {
    list-style: none;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;

    li {
      display: flex;
      align-items: center;
      gap: .8rem;

      font-size: 1rem;

      span {
        width: max-content;
        color: var(--support);

        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      p {
        font-weight: 500;
        color: var(--white);
      }

      a {
        border-bottom: 1px solid transparent;
        color: var(--blue);
        text-decoration: none;
        transition: margin-left .2s ease-in-out;

        &:hover {
          border-color: var(--blue);
          margin-left: .5rem;
        }
      }
    }
  }
`;

export const Nav = styled.div`
  width: 100%;
  background: var(--shape);

  h2 {
    padding-bottom: 0.7rem;
  }
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  button {
    width: 100%;
    height: 50px;
    background: var(--shape-hover);
    border: 1px solid var(--borders);
    border-radius: 0.30rem;
    text-transform: uppercase;

    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 13px 15px;
    transition: border 0.2s ease;

    p {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--white);
    }

    &:hover {
      border-color: var(--blue);
    }
  }
`;

export const Main = styled.div`

`;