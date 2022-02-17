import { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';

import { Header } from '../src/Components/Header';
import { Footer } from '../src/Components/Footer';
import { GeneralContext } from '../src/Context/general';

import { Container } from '../src/Styles/Container';
import { Main } from '../src/Styles/Main';

const Home: NextPage = () => {
  const { language } = useContext(GeneralContext);

  return (
    <>
      <Head>
        <title>Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        <Main>
          <div className="main__description">
            <h1 className="main__description__title">Vinícius Lucena</h1>
            {language === 'pt-BR' ? (
              <p className="main__description__subtitle">
                Desenvolvedor Front-end na Innvo Digital
              </p>
            ) : (
              <p className="main__description__subtitle">Front-end Developer at Innvo Digital</p>
            )}
          </div>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
