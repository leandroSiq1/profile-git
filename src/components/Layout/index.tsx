import { Switch, Route } from 'react-router-dom';
import { useUserGithubContext } from '../../hooks/useUserGithubContext';

import { Header } from '../Header';
import { Home } from '../../pages/Home';

import { Container, Content } from './styles';

export function Layout() {
  const { dataUserGithub } = useUserGithubContext();

  return (
    <Container>
      <Header />
      
      <Content>
        {dataUserGithub.name && (
          <Route exact path="/">
            <Home />
          </Route>
        )}
      </Content>
    </Container>
  );
}