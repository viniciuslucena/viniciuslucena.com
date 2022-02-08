import { useState } from 'react';

import Link from 'next/link';

import { BsGear } from 'react-icons/bs';

import { HeaderStyles, SettingsIcon } from './styles';

export const Header = () => {
  const pages = ['About', 'Skills', 'Projects', 'Blog'];
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
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

      <SettingsIcon onClick={handleSettings}>
        <BsGear />
      </SettingsIcon>
    </HeaderStyles>
  );
};
