import { createContext } from 'react';

type GeneralContextType = {
  language: string;
  setLanguage: (value: string) => void;
};

export const GeneralContext = createContext<GeneralContextType>({
  language: undefined,
  setLanguage: () => {
    //
  }
});
