import Head from 'next/head';

import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Project } from '../src/Components/Project';
import { Title } from '../src/Components/Title';

import { Container, ProjectsGrid } from '../src/Styles/Container';

import { projects } from '../data/projects';
import { useContext } from 'react';
import { GeneralContext } from '../src/Context/general';

const Projects = () => {
  const { language } = useContext(GeneralContext);

  return (
    <>
      <Head>
        <title>Projects // Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        {language === 'pt-BR' ? (
          <Title
            label="Trabalho. Hobby. Estudos."
            from="#fdc639"
            to="#ff7c60"
          />
        ) : (
          <Title
            label="Work. Hobby. Studies."
            from="#fdc639"
            to="#ff7c60"
          />
        )}
        <div>
          <ProjectsGrid>
            {projects.map((project) => (
              <Project
                key={project.key}
                title={project.title}
                description={project.description}
                url={project.url}
                demoLink={project?.demo}
              />
            ))}
          </ProjectsGrid>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
