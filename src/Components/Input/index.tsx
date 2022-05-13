import { InputWrapper, BlogTitle } from './styles';
import { BsSearch } from 'react-icons/bs';

type InputProps = {
  type: string;
  placeholder?: string;
  disabled?: boolean;
};

export const Input = ({ placeholder, type, disabled }: InputProps) => {
  return (
    <>
      <InputWrapper>
        <input type={type} placeholder={placeholder} disabled={disabled} />
        <BsSearch />
      </InputWrapper>

      <BlogTitle>
        🔥 <span>LATEST POSTS</span>
      </BlogTitle>
    </>
  );
};
