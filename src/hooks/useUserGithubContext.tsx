import { useState, useContext, createContext, ReactNode } from 'react';

interface UserGithubProviderProps {
  children: ReactNode;
}

interface UserGithubContextProps {
  userGithub: string;
  setUserGithub: (user: string) => void;
  getDataUserGithub: () => void;
  dataUserGithub: DataUserGithubProps
}

interface DataUserGithubProps {
  name: string;
  avatar_url: string;
  bio: string;
  blog: string;
  html_url: string;
  created_at: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  public_repos: number;
  repos_url: string;
}

export const UserGithubContext = createContext<UserGithubContextProps>(
  {} as UserGithubContextProps
);

export function UserGithubProvider({ children }: UserGithubProviderProps) {
  const [dataUserGithub, setDataUserGithub] = useState<DataUserGithubProps>({} as DataUserGithubProps);
  const [userGithub, setUserGithub] = useState('');

  async function getDataUserGithub() {
    await fetch(`https://api.github.com/users/${userGithub}`)
    .then(response => response.json())
    .then(data => setDataUserGithub(data)); 

    setUserGithub('');
  }

  return (
    <UserGithubContext.Provider value={{ userGithub, setUserGithub, getDataUserGithub, dataUserGithub }}>
      {children}
    </UserGithubContext.Provider>
  );
}

export function useUserGithubContext() {
  const context = useContext(UserGithubContext);

  return context;
}