import { NextPage } from 'next';

import { Header } from '../src/Components/Header';
import { Footer } from '../src/Components/Footer';

import { Container } from '../src/Styles/Container';
import { Main } from '../src/Styles/Main';

import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Container>
        <Main>
          <div className="main__description">
            <h1 className="main__description__title">Vinícius Lucena</h1>
            <p className="main__description__subtitle">Front-end Developer at Innvo Digital</p>
          </div>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
