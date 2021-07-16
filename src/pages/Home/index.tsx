import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import { useUserGithubContext } from '../../hooks/useUserGithubContext';
import { formattedDate } from '../../hooks/useFormatDate';

import { Header } from '../../components/Header';

import { 
  FiCalendar,
  FiBookmark,
  FiLink,
  FiArchive,
  FiUsers,
} from 'react-icons/fi';
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
  const { dataUserGithub, setDataUserGithub, setUserGithub } = useUserGithubContext();
  const history = useHistory();

  useEffect(() => {
    const storageValue = localStorage.getItem("@ProfileGit:userGithub");
    if (storageValue) {
      fetch(`https://api.github.com/users/${storageValue}`)
      .then(response => response.json())
      .then(data => setDataUserGithub(data));
      
      setUserGithub('');
      return;
    }
  }, []);

  function formattedUrlUserBlog(url: string) {
    const formatUrlOne = url.split("https://");
    const formatUrlTwo = url.split("http://");
  
    if (formatUrlTwo.length > 1) {
      return formatUrlTwo[1];
    }
    
    if (formatUrlOne.length > 1) {
      return formatUrlOne[1];
    }

    return url;
  }

  return (
    <Container>
      <Header buttonBack={false} inputUser />

      <Wrapper>
        {dataUserGithub.name && (
          <Content>
            <Sidebar>
              <UserInfo>
                <ul>
                  <li>
                    <span>
                      <FiCalendar size={20} color="var(--blue)" />
                      Inicio da jornada:
                    </span>
                    
                    <p>{formattedDate(dataUserGithub.created_at)}</p>
                  </li>

                  <li>
                    <span>
                      <FiBookmark size={20} color="var(--blue)" />
                      Repositórios publicos: 
                    </span>
                    
                    <p>{dataUserGithub.public_repos}</p>
                  </li>

                  <li>
                    <span>
                      <FiLink size={20} color="var(--blue)" />
                    </span>

                    <a target="_blank" href={`https://${formattedUrlUserBlog(dataUserGithub.blog)}`}>Visitar site</a>
                  </li>
                </ul>
              </UserInfo>

              <div className="separator"></div>

              <Nav>
                <h2>Acesso rápido</h2>

                <Buttons>
                  <button type="button" onClick={() => history.push("/repos")}>
                    <FiArchive size={24} color="var(--blue)" />
                    <p>Repositórios</p>
                  </button>

                  <button type="button">
                    <FiUsers size={24} color="var(--blue)" />
                    <p>Seguindo</p>
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
        )}
      </Wrapper>
    </Container>
  );
}