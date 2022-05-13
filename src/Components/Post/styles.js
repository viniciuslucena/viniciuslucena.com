import styled from 'styled-components';

export const PostContainer = styled.a`
  display: flex;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
  padding: 2rem 0;
  border-bottom: 1px solid var(--background-lighter);

  h2 {
    margin-bottom: 0.5rem;
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
