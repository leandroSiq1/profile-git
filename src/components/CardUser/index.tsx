import { FiGithub } from 'react-icons/fi';
import { Container } from './styles';

interface CardProps {
  image: string;
  title: string;
  url: string;
}

export function Card({ image, title, url }: CardProps) {
  return (
    <Container>
      <img src={image} alt={title} />

      <h1>{title}</h1>
      <a target="_blank" href={url}>
        <FiGithub color="var(--blue)" size={24} />
        Acessar github
      </a>
    </Container>
  );
}