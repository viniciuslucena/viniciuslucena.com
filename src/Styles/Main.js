import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - 170px);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .main__description {
    display: flex;
    flex-direction: column;
  }

  .main__description__title {
    font-size: 48px;
    color: var(--white);
  }

  .main__description__subtitle {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-text-secondary);
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
