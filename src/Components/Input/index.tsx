import { InputWrapper, BlogTitle } from './styles';
import { BsSearch } from 'react-icons/bs';

type InputProps = {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
};

export const Input = ({ placeholder, type, disabled, onChange }: InputProps) => {
  return (
    <>
      <InputWrapper>
        <input type={type} placeholder={placeholder} disabled={disabled} onChange={onChange} />
        <BsSearch />
      </InputWrapper>

      <BlogTitle>
        🔥 <span>LATEST POSTS</span>
      </BlogTitle>
    </>
  );
};
