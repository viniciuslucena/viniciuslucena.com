import styled from 'styled-components';

type TitleProps = {
  label: string;
  from: string;
  to: string;
};

export const Title = ({ label, from, to }: TitleProps) => {
  const TitleStyle = styled.h2`
    font-family: 'Neuzeit Grotesk';
    font-size: 48px;
    background-color: red;
    background-image: linear-gradient(${from}, ${to});
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    margin-bottom: 35px;
  `;

  return <TitleStyle>{label}</TitleStyle>;
};
