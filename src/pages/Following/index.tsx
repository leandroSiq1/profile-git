import { useState, useEffect } from 'react';

import { useUserGithubContext } from '../../hooks/useUserGithubContext';
import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Card } from '../../components/CardUser';

interface UsersFollowingProps {
  avatar_url: string;
  html_url: string;
  login: string;
}

export function Following() {
  const [usersFollowing, setUserFollowing] = useState<UsersFollowingProps[]>([]);
  const { dataUserGithub } = useUserGithubContext();

  useEffect(() => {
    if (dataUserGithub.following_url) {
      let url = dataUserGithub.following_url;
      const formaterUrl = url.split("{/other_user}");
      const urlFormated = formaterUrl[0];
    
      fetch(`${urlFormated}`)
      .then(response => response.json())
      .then(data => {
        setUserFollowing(data);
        console.log(data);
      });
    }

  }, []);

  return (
    <Container>
      <Header buttonBack inputUser={false} />
      <h1>Usuário está Seguindo</h1>
      <Content>
        {usersFollowing && (
          usersFollowing.map(user => (
            <Card title={user.login} image={user.avatar_url} url={user.html_url}  />
          ))
        )}
      </Content>
    </Container>
  );
}