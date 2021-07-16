import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserGithubContext } from '../../hooks/useUserGithubContext';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';

import { Container, BoxInput, BoxUser } from './styles';

interface HeaderProps {
  buttonBack: boolean;
  inputUser: boolean;
}

export function Header({ buttonBack, inputUser }: HeaderProps) {
  const { userGithub, setUserGithub, getDataUserGithub, dataUserGithub } = useUserGithubContext();
  const history = useHistory();
  
  return (
    <Container>
      {buttonBack && (
        <button type="button" onClick={() => history.push("/")}>
          <FiArrowLeft color="var(--white)" size={25} />
        </button>
      )}

        {inputUser && (
          <BoxInput>
            <h1>Profile.git</h1>
            <div>
              <input 
                type="text" 
                placeholder="Digite o usuario" 
                value={userGithub} 
                onChange={(event) => setUserGithub(event.target.value)}
                onKeyPress={(event) => event.key === "Enter" && getDataUserGithub()}
              />
              
              <button type="button" onClick={getDataUserGithub}>
                <FiSearch size={24} color="var(--white)" />
              </button>
            </div>
          </BoxInput>
        )}

      {dataUserGithub.name ? (
        <BoxUser>
          <img src={dataUserGithub.avatar_url}  alt={`Usuário ${dataUserGithub.name}`} />

          <a target="_blank" rel="noreferrer" href={dataUserGithub.html_url}>Visitar github</a>
        </BoxUser>
      ) : ''}
    </Container>
  );
}