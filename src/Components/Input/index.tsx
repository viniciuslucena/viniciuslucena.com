import { InputWrapper, BlogTitle } from './styles';
import { BsSearch } from 'react-icons/bs';

type InputProps = {
  type: string;
  placeholder?: string;
};

export const Input = ({ placeholder, type }: InputProps) => {
  return (
    <>
      <InputWrapper>
        <input type={type} placeholder={placeholder} />
        <BsSearch />
      </InputWrapper>

      <BlogTitle>
        🔥 <span>LATEST POSTS</span>
      </BlogTitle>
    </>
  );
};
