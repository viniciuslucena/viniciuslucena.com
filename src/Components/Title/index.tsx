import styled from 'styled-components';

type TitleProps = {
  label: string;
  from: string;
  to: string;
  subtitle?: string;
};

export const Title = ({ label, from, to, subtitle }: TitleProps) => {
  const TitleWrapper = styled.div`
    margin-bottom: 35px;
  `;
  const TitleStyle = styled.h2`
    font-family: 'Rubik';
    font-size: 62px;
    background-color: red;
    background-image: linear-gradient(90deg, ${from}, ${to});
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    margin-bottom: 15px;

    @media only screen and (max-width: 768px) {
      font-size: 36px;
    }
  `;

  const SubtitleStyle = styled.p`
    color: var(--color-text-primary);
    font-size: 18px;
  `;

  return (
    <TitleWrapper>
      <TitleStyle>{label}</TitleStyle>
      <SubtitleStyle>{subtitle}</SubtitleStyle>
    </TitleWrapper>
  );
};
