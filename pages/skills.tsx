import Head from 'next/head';
import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Title } from '../src/Components/Title';

import { Container } from '../src/Styles/Container';

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills // Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        <Title label="Skills." from="#45c270" to="#21cdc3" />
      </Container>
      <Footer />
    </>
  );
};

export default Skills;
