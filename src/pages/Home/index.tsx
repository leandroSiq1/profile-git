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
} from './styles';

export function Home() {
  const { dataUserGithub } = useUserGithubContext();

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
                  
                  <p>{dataUserGithub.created_at}</p>
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

          <Main />
        </Content>
      </Wrapper>
    </Container>
  );
}