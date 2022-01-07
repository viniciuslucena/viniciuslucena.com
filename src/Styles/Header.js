import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  height: 110px;

  .logo {
    height: 80px;
    width: 80px;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 50px;
      cursor: pointer;
      padding: 10px;
      color: var(--color-text-secondary);
      font-size: 14px;

      transition: color 0.2s ease;

      &:hover {
        color: var(--white);
      }
    }
  }
`;
