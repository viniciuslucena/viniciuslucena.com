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
      padding: 20px 0px;
      color: var(--color-text-secondary);
      font-size: 14px;
      position: relative;
      display: inline-block;

      transition: color 0.2s ease;

      &:hover {
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
  }
`;
