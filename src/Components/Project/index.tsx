import { ProjectWrapper, ProjectLink } from './styles';

type ProjectProps = {
  title: string;
  description: string;
  url: string;
  img: string;
};

export const Project = ({ title, description, url, img, ...rest }: ProjectProps) => {
  return (
    <ProjectLink href={url} target="_blank" rel="noreferrer" {...rest}>
      <ProjectWrapper>
        <div className="project-description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="project-image">
          <img src={img} alt="My Project" />
        </div>
      </ProjectWrapper>
    </ProjectLink>
  );
};
