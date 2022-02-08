import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Title } from '../src/Components/Title';

import { Container } from '../src/Styles/Container';

const Skills = () => {
  return (
    <>
      <Header />
      <Container>
        <Title label="Skills. Habilidades." from="#45c270" to="#21cdc3" />
      </Container>
      <Footer />
    </>
  );
};

export default Skills;
