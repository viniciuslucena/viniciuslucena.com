import styled from 'styled-components';

export const FooterStyles = styled.footer`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--color-text-secondary);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    height: 40px;

    &:hover {
      color: var(--white);
    }

    & + a {
      margin-left: 35px;
    }

    svg {
      margin-left: 10px;
    }
  }
`;
