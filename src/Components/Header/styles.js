import styled, { css } from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  height: 110px;
  max-width: 90%;
  margin: 0 auto;

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
      font-size: 14px;
      position: relative;
      display: inline-block;
      padding: 20px 0px;

      transition: color 0.2s ease;

      a {
        padding: 20px 0px;
        text-decoration: none;
        color: var(--color-text-secondary);
      }

      &:hover {
        a {
          color: var(--white);
        }
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--white);
        transform: scaleX(0);
        transform-origin: bottom right;

        transition: transform 0.2s ease;
      }

      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

export const SettingsIcon = styled.div`
  svg {
    transition: color 0.2s ease;

    &:hover {
      color: var(--white);
      transform: rotate(25deg);
    }
  }
`;
