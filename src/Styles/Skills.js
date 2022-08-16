import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  .skill-logo {
    height: 64px;
    width: 64px;
    cursor: pointer;

    fill: red;
  }
`

export const SkillDescription = styled.div`
  border-left: 3px solid white;
  padding-left: 15px;
`
