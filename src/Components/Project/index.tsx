import { ProjectWrapper, ProjectButton, ProjectButtonContainer } from './styles';
import { FiExternalLink } from 'react-icons/fi';

type ProjectProps = {
  title: string;
  description: string;
  url: string;
  demoLink?: string,
};

export const Project = ({ title, description, url, demoLink, ...rest }: ProjectProps) => {
  return (
    <ProjectWrapper>
      <div className="project-description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <ProjectButtonContainer>
        <ProjectButton href={url} target="_blank" rel="noreferrer">
          <p>Source</p> <FiExternalLink />
        </ProjectButton>
        {demoLink && (
          <ProjectButton>
            <p>Demo</p> <FiExternalLink />
          </ProjectButton>
        )}
      </ProjectButtonContainer>
    </ProjectWrapper>
  );
};
