import { useState, useEffect } from 'react';

import { useUserGithubContext } from '../../hooks/useUserGithubContext';
import { formattedDate } from '../../hooks/useFormatDate';

import { Header } from '../../components/Header';

import { FiGithub, FiCalendar } from 'react-icons/fi';
import { 
  Container, 
  Content, 
  Card, 
  Title, 
  Footer,
  Datas,
} from './styles';

interface DataReposUserProps {
  name: string;
  full_name: string;
  description: string;
  language: string;
  created_at: string;
  owner: {
    avatar_url: string;
  }
}

export function Repos() {
  const [dataReposUser, setDataReposUser] = useState<DataReposUserProps[]>([]);
  const { userGithub } = useUserGithubContext();

  useEffect(() => {
    const storageValue = localStorage.getItem("@ProfileGit:userGithub");

    if (storageValue) {
      fetch(`https://api.github.com/users/${storageValue}/repos`)
      .then(response => response.json())
      .then(data => setDataReposUser(data));

      return;
    }
  }, [userGithub]);

  return (
    <Container>
      <Header buttonBack inputUser={false} />
      <h1>Repositórios</h1>

      <Content>
        {dataReposUser && (
          dataReposUser.map(repo => (
            <Card>
              <Title>
                <img src={repo.owner.avatar_url} alt="Leandro lindo" />

                <h3>{repo.name}</h3>
              </Title>

              <p>
                {repo.description ? (
                  repo.description
                ) : "Este repositório não possui nenhuma descrição. 😱"}
              </p>

              <Footer>
                <Datas>
                  <ul>
                    <li> 
                      <FiCalendar color="var(--icons)" size={20} />
                      <p>
                        <span>Criado em: </span>
                        {formattedDate(repo.created_at)}
                      </p>
                    </li>
                  </ul>
                </Datas>

                <a target="_blank" href={`https://github.com/${repo.full_name}`}>
                  <FiGithub color="var(--blue)" size={20} />
                  Ver repositório no github
                </a>
              </Footer>
            </Card>
            ))
          )}
      </Content>
    </Container>
  );
}