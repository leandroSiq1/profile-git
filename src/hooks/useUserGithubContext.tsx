import { useState, useContext, createContext, ReactNode } from 'react';

interface UserGithubProviderProps {
  children: ReactNode;
}

interface UserGithubContextProps {
  userGithub: string;
  setUserGithub: (user: string) => void;
}

export const UserGithubContext = createContext<UserGithubContextProps>(
  {} as UserGithubContextProps
);

export function UserGithubProvider({ children }: UserGithubProviderProps) {
  const [userGithub, setUserGithub] = useState('');

  return (
    <UserGithubContext.Provider value={{ userGithub, setUserGithub }}>
      {children}
    </UserGithubContext.Provider>
  );
}

export function useUserGithubContext() {
  const context = useContext(UserGithubContext);

  return context;
}