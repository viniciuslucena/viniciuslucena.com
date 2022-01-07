import { NextPage } from 'next';

import { Header } from '../src/Components/Header';
import { Footer } from '../src/Components/Footer';

import { Container } from '../src/Styles/Container';
import { Main } from '../src/Styles/Main';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <div className="main__description">
          <h1 className="main__description__title">Vinícius Lucena</h1>
          <p className="main__description__subtitle">Front-end Developer at Innvo Digital</p>
        </div>
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
