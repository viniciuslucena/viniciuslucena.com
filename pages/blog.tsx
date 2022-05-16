import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Input } from '../src/Components/Input';
import { Title } from '../src/Components/Title';
import { GeneralContext } from '../src/Context/general';

import { Container } from '../src/Styles/Container';
import { PostsContainer } from '../src/Styles/Blog'

import axios from 'axios';
import { Post } from '../src/Components/Post';

const Blog = () => {
  const [posts, setPosts] = useState([])
  const { language } = useContext(GeneralContext);

  useEffect(() => {
    axios.get('https://dev.to/api/articles?username=viniciuslucena').then((response) => {
      setPosts(response.data);
    });
  }, []);

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
            from="#FF6868"
            to="#FF68DE"
            subtitle={`Aqui você pode encontrar minhas ${posts.length} postagens na plataforma dev.to. Você encontra postagens sobre desenvolvimento web, carreira na área de T.I ou apenas alguns pensamentos que eu decidi compartilhar.`}
          />
        ) : (
          <Title
            label="Thoughts. Tutorials. Tips."
            from="#FF6868"
            to="#FF68DE"
            subtitle={`Here you can find all the ${posts.length} posts I wrote on the dev.to. You can read about web development, tech career or just some thoughts i decided to share.`}
          />
        )}

        <Input type="text" disabled={true} placeholder="Search for posts" />

        <PostsContainer>
          {posts.map(post => (
            <div key={post.id}>
              <Post
                title={post.title}
                url={post.url}
                likes={post.positive_reactions_count}
                comments={post.comments_count}
                reading_minutes={post.reading_time_minutes}
                is_highlighted={false}
                created_at={post.created_at}
              />
            </div>
          ))}
        </PostsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
