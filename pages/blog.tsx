import Head from 'next/head';
import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Input } from '../src/Components/Input';
import { Title } from '../src/Components/Title';

import { Container } from '../src/Styles/Container';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog // Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Container>
        <Title
          label="Tips. Tutorials. Notes."
          from="#fdc639"
          to="#ff7c60"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta."
        />

        <Input type="text" placeholder="Search for posts" />
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
