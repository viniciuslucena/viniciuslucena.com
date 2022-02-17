import { useContext, useState } from 'react';

import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderStyles, HeaderStylesMobile } from './styles';
import { GeneralContext } from '../../Context/general';

export const Header = () => {
  const { language, setLanguage } = useContext(GeneralContext);
  const [openMenu, setOpenMenu] = useState(false);
  // const pages =
  //   language === 'pt-BR'
  //     ? ['Sobre', 'Skills', 'Projetos', 'Blog']
  //     : ['About', 'Skills', 'Projects', 'Blog'];
  const pages = ['About', 'Skills', 'Projects', 'Blog'];

  return (
    <>
      <HeaderStyles>
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="Logo Vinícius Lucena" className="logo" />
          </a>
        </Link>

        <nav>
          <ul>
            {pages.map((page) => (
              <li key={page}>
                <Link href={page.toLowerCase()}>{page.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="language">
          <img
            src="./icons/br-flag.jpeg"
            className={`flag ${language === 'pt-BR' && 'active'}`}
            onClick={() => setLanguage('pt-BR')}
          />
          <img
            src="./icons/en-flag.jpeg"
            className={`flag ${language === 'en-US' && 'active'}`}
            onClick={() => setLanguage('en-US')}
          />
        </div>
      </HeaderStyles>

      <HeaderStylesMobile>
        <div className="closedMenu">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="Logo Vinícius Lucena" className="logo" />
            </a>
          </Link>
          <GiHamburgerMenu onClick={() => setOpenMenu(!openMenu)} />
        </div>
        {openMenu && (
          <div className="openedMenu">
            <ul>
              {pages.map((page) => (
                <li key={page}>
                  <Link href={page.toLowerCase()}>{page.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
            <div className="language">
              <img
                src="./icons/br-flag.jpeg"
                className={`flag ${language === 'pt-BR' && 'active'}`}
                onClick={() => setLanguage('pt-BR')}
              />
              <img
                src="./icons/en-flag.jpeg"
                className={`flag ${language === 'en-US' && 'active'}`}
                onClick={() => setLanguage('en-US')}
              />
            </div>
          </div>
        )}
      </HeaderStylesMobile>
    </>
  );
};
