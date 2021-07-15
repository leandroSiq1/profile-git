import { useUserGithubContext } from '../../hooks/useUserGithubContext';
import { FiSearch } from 'react-icons/fi';

import { Container, BoxInput, BoxUser } from './styles';

export function Header() {
  const { userGithub, setUserGithub, getDataUserGithub, dataUserGithub } = useUserGithubContext();

  return (
    <Container>
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

      {dataUserGithub.name ? (
        <BoxUser>
          <img src={dataUserGithub.avatar_url}  alt={`Usuário ${dataUserGithub.name}`} />

          <a target="_blank" rel="noreferrer" href={dataUserGithub.html_url}>Visitar github</a>
        </BoxUser>
      ) : ''}
    </Container>
  );
}