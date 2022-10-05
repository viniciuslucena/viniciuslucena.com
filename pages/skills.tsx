import Head from 'next/head';
import { useContext, useState } from 'react';
import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Title } from '../src/Components/Title';
import { GeneralContext } from '../src/Context/general';

import { Container } from '../src/Styles/Container';
import { SkillDescription, SkillsContainer, SkillsGrid } from '../src/Styles/Skills';

const Skills = () => {
  const [skill, setSkill] = useState('');
  const { language } = useContext(GeneralContext);

  return (
    <>
      <Head>
        <title>Skills // Vinícius Lucena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        {language === 'pt-BR' ? (
          <Title label="Habilidades." from="#45c270" to="#21cdc3" />
        ) : (
          <Title label="Skills." from="#45c270" to="#21cdc3" />
        )}

        <SkillsContainer>
          <SkillsGrid>
            <img src="images/react.svg" className='skill-logo' onMouseEnter={() => setSkill('react')} onMouseLeave={() => setSkill('')} />
            <img src="images/next.svg" className='skill-logo' onMouseEnter={() => setSkill('next')} onMouseLeave={() => setSkill('')} />
            <img src="images/node.svg" className='skill-logo' onMouseEnter={() => setSkill('node')} onMouseLeave={() => setSkill('')} />
            <img src="images/laravel.svg" className='skill-logo' onMouseEnter={() => setSkill('laravel')} onMouseLeave={() => setSkill('')} />
            <img src="images/sass.svg" className='skill-logo' onMouseEnter={() => setSkill('sass')} onMouseLeave={() => setSkill('')} />
            <img src="images/postgresql.svg" className='skill-logo' onMouseEnter={() => setSkill('postgres')} onMouseLeave={() => setSkill('')} />
            <img src="images/figma.svg" className='skill-logo' onMouseEnter={() => setSkill('figma')} onMouseLeave={() => setSkill('')} />
            <img src="images/firebase.svg" className='skill-logo' onMouseEnter={() => setSkill('firebase')} onMouseLeave={() => setSkill('')} />
            <img src="images/jest.svg" className='skill-logo' onMouseEnter={() => setSkill('jest')} onMouseLeave={() => setSkill('')} />
            <img src="images/styled-components.svg" className='skill-logo' onMouseEnter={() => setSkill('styled-components')} onMouseLeave={() => setSkill('')} />
          </SkillsGrid>
          <SkillDescription>
            {skill === 'react' && (
              <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.</p>
            )}
            {skill === 'figma' && (
              <p>Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.</p>
            )}
            {skill === 'firebase' && (
              <p>Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web.</p>
            )}
            {skill === 'laravel' && (
              <p>Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC.</p>
            )}
            {skill === 'jest' && (
              <p>Jest é uma estrutura de teste JavaScript construída em cima do Jasmine e mantida pela Meta. Ele foi projetado e construído por Christoph Nakazawa com foco na simplicidade e suporte para grandes aplicativos da web.</p>
            )}
            {skill === 'next' && (
              <p>Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.</p>
            )}
            {skill === 'node' && (
              <p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
            )}
            {skill === 'postgres' && (
              <p>PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.</p>
            )}
            {skill === 'sass' && (
              <p>O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar.</p>
            )}
            {skill === 'styled-components' && (
              <p>Styled-Components é uma biblioteca que permite que você escreva estilos dentro de um arquivo Javascript.</p>
            )}
          </SkillDescription>
        </SkillsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Skills;
