import { ProjectWrapper, ProjectLink } from './styles';

type ProjectProps = {
  title: string;
  description: string;
  url: string;
  img: string;
  tech: string[];
};

export const Project = ({ title, description, url, img, tech, ...rest }: ProjectProps) => {
  return (
    <ProjectLink href={url} target="_blank" rel="noreferrer" {...rest}>
      <ProjectWrapper>
        <div className="project-description">
          <h1>{title}</h1>
          <p>{description}</p>
          {/* <div className="project-tech">
            {tech.map((techName, index) => (
              <span key={index}>{techName} </span>
            ))}
          </div> */}
        </div>
        <div className="project-image">
          <img src={img} alt="My Project" />
        </div>
      </ProjectWrapper>
    </ProjectLink>
  );
};
