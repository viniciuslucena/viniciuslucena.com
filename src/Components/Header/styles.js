import styled from 'styled-components';

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

  .language {
    display: flex;
    justify-content: center;

    .flag {
      margin-top: 30px;
      width: 25px;
      filter: grayscale(1);
      cursor: pointer;

      &.active {
        filter: grayscale(0);
      }

      & + .flag {
        margin-left: 20px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderStylesMobile = styled.header`
  .closedMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    transition: all 0.2s ease;

    .logo {
      width: 50px;
    }
  }

  .openedMenu {
    background-color: var(--grey);
    padding: 20px;
    margin-bottom: 20px;

    ul li {
      list-style: none;
      text-align: center;

      & + li {
        margin-top: 20px;
      }

      a {
        text-decoration: none;
        color: var(--white);
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

    .language {
      display: flex;
      justify-content: center;
      width: 100%;

      .flag {
        margin-top: 30px;
        width: 25px;
        filter: grayscale(1);

        &.active {
          filter: grayscale(0);
        }

        & + .flag {
          margin-left: 20px;
        }
      }
    }
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const SettingsIcon = styled.div`
  svg {
    transition: color 0.2s ease;

    &:hover {
      color: var(--white);
    }
    &.active {
      color: var(--white);
      transform: rotate(25deg);
    }
  }
`;
