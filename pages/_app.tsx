import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GeneralContext } from '../src/Context/general';
import { GlobalStyle } from '../src/Styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<string>();

  useEffect(() => {
    const browserLanguage = navigator.language;
    setLanguage(browserLanguage);
  }, []);

  return (
    <GeneralContext.Provider value={{ language, setLanguage }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </GeneralContext.Provider>
  );
}
