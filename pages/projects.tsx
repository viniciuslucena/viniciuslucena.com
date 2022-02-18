import Head from 'next/head';

import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Project } from '../src/Components/Project';
import { Title } from '../src/Components/Title';

import { Container } from '../src/Styles/Container';

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
          <Title label="Trabalho. Hobby. Estudos." from="#ff6868" to="#ff68de" />
        ) : (
          <Title label="Work. Hobby. Studies." from="#ff6868" to="#ff68de" />
        )}
        <div>
          {projects.map((project) => (
            <Project
              key={project.key}
              title={project.title}
              description={project.description}
              url={project.url}
              img={project.img}
              tech={project.tech}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
