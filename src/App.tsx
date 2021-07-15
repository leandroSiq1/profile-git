import { BrowserRouter } from 'react-router-dom';

import { UserGithubProvider } from './hooks/useUserGithubContext';
import { Layout } from './components/Layout';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <UserGithubProvider>
      <BrowserRouter>
        <Layout />
        <GlobalStyle />
      </BrowserRouter>
    </UserGithubProvider>
  );
}