import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  flex: 1;
  background: var(--grey);
  padding: 24px;
  color: var(--white);

  h1 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  p {
    font-size: 15px;
  }
`;

export const ProjectButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
`;

export const ProjectButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--background);
  color: var(--white);
  border: 1px solid var(--white);
  padding: 9px 16px;
  border-radius: 4px;
  text-decoration: none;
  filter: brightness(0.7);

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1);
  }

  p {
    margin-right: 8px;
  }
`;
