import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Title } from '../src/Components/Title';

import { Container } from '../src/Styles/Container';

const Blog = () => {
  return (
    <>
      <Header />
      <Container>
        <Title label="Tips. Tutorials. Notes." from="#fdc639" to="#ff7c60" />
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
