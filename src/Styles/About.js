import styled from 'styled-components';

export const PersonalResume = styled.div`
  display: flex;

  img {
    width: 320px;
    border-radius: 20px;
  }

  .resume {
    margin-left: 25px;
    line-height: 32px;
  }
`;

export const Career = styled.div`
  margin-top: 55px;

  .second__title {
    color: var(--white);
    font-size: 28px;
    margin-bottom: 25px;
  }

  .jobs-list {
    list-style: none;

    li {
      margin-bottom: 40px;

      .jobs-list__title {
        color: var(--white);
        font-size: 22px;
        margin-bottom: 10px;
      }

      .jobs-list__link {
        color: var(--white);
        display: inline-block;
        margin-bottom: 7px;
      }
    }
  }
`;
