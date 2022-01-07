import { AppProps } from 'next/app';
import { GlobalStyle } from '../src/Styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
