import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Title } from '../src/Components/Title';

import { Container } from '../src/Styles/Container';

const Projects = () => {
  return (
    <>
      <Header />
      <Container>
        <Title label="Projects. Projetos." from="#ff6868" to="#ff68de" />
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
