import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { UserGithubProvider } from './hooks/useUserGithubContext';

import { Home } from './pages/Home';
import { Repos } from './pages/Repos';
import { Following } from './pages/Following';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <UserGithubProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/repos">
            <Repos />
          </Route>
          <Route exact path="/following">
            <Following />
          </Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </UserGithubProvider>
  );
}