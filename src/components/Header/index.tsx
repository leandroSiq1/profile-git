import { useUserGithubContext } from '../../hooks/useUserGithubContext';
import { FiSearch } from 'react-icons/fi';

import { Container, BoxInput } from './styles';

export function Header() {
  const { userGithub, setUserGithub } = useUserGithubContext();

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
          />
          
          <button type="button">
            <FiSearch size={24} color="var(--white)" />
          </button>
        </div>
      </BoxInput>
    </Container>
  );
}