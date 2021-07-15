import { useUserGithubContext } from '../../hooks/useUserGithubContext';

import { FiActivity } from 'react-icons/fi';
import { 
  Container, 
  Wrapper, 
  Content, 
  Sidebar, 
  UserInfo, 
  Main, 
  Nav,
  Buttons,
  Box,
} from './styles';

export function Home() {
  const { dataUserGithub } = useUserGithubContext();

  function formattedDate(date: string) {
    const formatDate = new Date(date);
    const dateFormatter = new Intl.DateTimeFormat("pr-BR");

    return dateFormatter.format(formatDate);
  }

  return (
    <Container>
      <Wrapper>
        <Content>
          <Sidebar>
            <UserInfo>
              <ul>
                <li>
                  <span>
                    <FiActivity size={20} color="var(--blue)" />
                    Inicio da jornada:
                  </span>
                  
                  <p>{formattedDate(dataUserGithub.created_at)}</p>
                </li>

                <li>
                  <span>
                    <FiActivity size={20} color="var(--blue)" />
                    Repositórios publicos: 
                  </span>
                  
                  <p>{dataUserGithub.public_repos}</p>
                </li>

                <li>
                  <span>
                    <FiActivity size={20} color="var(--blue)" />
                  </span>

                  <a target="_blank" href={dataUserGithub.blog}>Visitar site</a>
                </li>
              </ul>
            </UserInfo>

            <div className="separator"></div>

            <Nav>
              <h2>Acesso rápido</h2>

              <Buttons>
                <button type="button">
                  <FiActivity size={24} color="var(--blue)" />
                  <p>Repositórios</p>
                </button>

                <button type="button">
                  <FiActivity size={24} color="var(--blue)" />
                  <p>Seguindo</p>
                </button>

                <button type="button">
                  <FiActivity size={24} color="var(--blue)" />
                  <p>Seguidores</p>
                </button>
              </Buttons>
            </Nav>
          </Sidebar>

          <Main>
            <img src={dataUserGithub.avatar_url} alt={`Usuario ${dataUserGithub.name}`} />
            <h1>{dataUserGithub.name}</h1>

            <p>{dataUserGithub.bio}</p>

            <Box>
              <ul>
                <li>
                  <h3>{dataUserGithub.public_repos}</h3>
                  <p>Repositórios</p>
                </li>

                <li>
                  <h3>{dataUserGithub.following}</h3>
                  <p>Seguindo</p>
                </li>

                <li>
                  <h3>{dataUserGithub.followers}</h3>
                  <p>Seguidores</p>
                </li>
              </ul>
            </Box>
          </Main>
        </Content>
      </Wrapper>
    </Container>
  );
}