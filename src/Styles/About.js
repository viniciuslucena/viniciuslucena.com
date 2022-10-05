import styled from 'styled-components';

export const PersonalResume = styled.div`
  display: flex;

  img {
    width: 320px;
    border-radius: 20px;
  }

  .resume__image {
    display: inline-block;
  }

  .resume {
    margin-left: 25px;
    line-height: 32px;

    span {
      color: var(--white);
      font-weight: bold;
    }
  }

  .resume__btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    a {
      display: flex;
      align-items: center;
      color: var(--white);
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;

      transition: background 0.2s ease;

      svg {
        margin-right: 10px;
      }

      &:hover {
        background-color: var(--grey);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column !important;

    .resume__image {
      margin-bottom: 25px;
      img {
        width: 100%;
        /* height: 310px; */
        aspect-ratio: 1;
      }
    }

    .resume {
      margin-left: 0;
    }

    .resume__text {
      text-align: left;
      border-left: 4px solid var(--grey);
      padding-left: 20px;
    }

    .resume__btn {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: 20px;

      a {
        padding: 0;
      }
    }
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
