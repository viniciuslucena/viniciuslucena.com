import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

import { FooterStyles } from './styles';

const links = [
  {
    title: 'instagram',
    url: 'https://instagram.com/viniciuslucena',
    icon: <FiInstagram />
  },
  {
    title: 'linkedin',
    url: 'https://linkedin.com/in/viniciuslucena',
    icon: <FiLinkedin />
  },
  {
    title: 'github',
    url: 'https://github.com/viniciuslucena',
    icon: <FiGithub />
  }
];

export const Footer = () => {
  return (
    <FooterStyles>
      {links.map((link, index) => (
        <a href={link.url} target="_blank" key={index} rel="noreferrer">
          <span>{link.title}</span>
          {link.icon}
        </a>
      ))}
    </FooterStyles>
  );
};
