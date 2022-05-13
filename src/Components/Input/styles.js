import styled from 'styled-components';

export const InputWrapper = styled.form`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 7px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 15px 15px;
    outline: none;
    color: var(--text-primary-color);
    font-size: 18px;
  }

  svg {
    margin-right: 15px;
  }
`;

export const BlogTitle = styled.p`
  margin-top: 35px;
  font-weight: 400;

  span {
    background-color: red;
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
`;
