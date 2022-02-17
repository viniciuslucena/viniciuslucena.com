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
