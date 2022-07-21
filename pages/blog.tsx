import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Input } from '../src/Components/Input';
import { Title } from '../src/Components/Title';
import { GeneralContext } from '../src/Context/general';
import { Post, PostProps } from '../src/Components/Post';

import { Container } from '../src/Styles/Container';
import { PostsContainer, SpinnerContainer } from '../src/Styles/Blog'

import PostsService from '../src/Services/PostsService';

import { TailSpin } from 'react-loader-spinner'

const Blog = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useContext(GeneralContext);

  const handleFilter = (event: React.FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value;
    const newFilter = posts.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord === '') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(newFilter)
    }
  }

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true);
        const response = await PostsService.listPosts();
        setPosts(response);
        setFilteredPosts(response);
      } catch {
        return [];
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
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

        <Input type="text" placeholder="Search for posts" onChange={handleFilter} />

        {!isLoading ? (
          <PostsContainer>
            {filteredPosts.slice(0, 15).map(post => (
              <div key={post.id}>
                <Post
                  title={post.title}
                  url={post.url}
                  likes={post.positive_reactions_count}
                  comments={post.comments_count}
                  reading_minutes={post.reading_time_minutes}
                  created_at={post.created_at}
                />
              </div>
            ))}
          </PostsContainer>
        ) : (
          <SpinnerContainer>
            <TailSpin ariaLabel="loading-indicator" color="#00BFFF" height='50px' width='50px' />
          </SpinnerContainer>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
