import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`
