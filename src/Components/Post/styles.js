import styled from 'styled-components';

export const PostContainer = styled.a`
  display: flex;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
  padding: 2rem 0;
  border-bottom: 1px solid var(--background-lighter);
  filter: grayscale(1);
  transition: all 0.2s;

  &:hover {
    filter: grayscale(0);

    h2 {
      background-image: linear-gradient(#ff6868, #ff68de);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
    }
  }

  h2 {
    margin-bottom: 0.5rem;
    transition: background 0.1s;

    /* &:hover {
      background-image: linear-gradient(#ff6868, #ff68de);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
    } */
  }

  .postInfos {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;

    .reading_minutes {
      font-size: 12px;
    }
  }

  .infoCounts {
    display: flex;
    gap: 0.7rem
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .postInfos {
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
  }
`

export const Badge = styled.span`
  display: flex;

  svg {
    margin-right: 0.5rem;
  }
`
