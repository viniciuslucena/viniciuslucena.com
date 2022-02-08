import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 35px;

  transition: all 0.2s ease;

  .project-description {
    padding: 20px;
  }

  .project-image {
    height: 200px;
    width: 250px;

    img {
      width: 100%;
      height: 100%;
      filter: grayscale(1);
      border-radius: 0 10px 10px 0;
    }
  }

  &:hover {
    background: var(--grey);

    img {
      filter: grayscale(0);
    }
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--white);
`;
