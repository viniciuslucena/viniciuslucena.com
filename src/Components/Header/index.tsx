import { useContext, useState } from 'react';

import Link from 'next/link';

import { BsGear } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderStyles, SettingsIcon, HeaderStylesMobile } from './styles';
import { GeneralContext } from '../../Context/general';

export const Header = () => {
  const pages = ['About', 'Skills', 'Projects', 'Blog'];
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { language, setLanguage } = useContext(GeneralContext);

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

        <SettingsIcon onClick={() => setSettingsOpen(!settingsOpen)}>
          <BsGear className={settingsOpen ? 'active' : null} />
        </SettingsIcon>
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
