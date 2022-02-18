import Head from 'next/head';
import { useContext } from 'react';
import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Input } from '../src/Components/Input';
import { Title } from '../src/Components/Title';
import { GeneralContext } from '../src/Context/general';

import { Container } from '../src/Styles/Container';

const Blog = () => {
  const { language } = useContext(GeneralContext);

  return (
    <>
      <Head>
        <title>Blog // Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        {language === 'pt-BR' ? (
          <Title
            label="Pensamentos. Tutoriais. Dicas."
            from="#fdc639"
            to="#ff7c60"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta."
          />
        ) : (
          <Title
            label="Thoughts. Tutorials. Tips."
            from="#fdc639"
            to="#ff7c60"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta."
          />
        )}

        <Input type="text" placeholder="Search for posts" />
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
