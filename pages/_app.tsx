import '../styles/globals.css';
import NavBar from '../components/NavBar';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette : {
    primary : {
      main : '#A9DFAF',
    },
    secondary : {
      main : '#000000',
    },
  },
  typography : {
    fontFamily : "'Open Sans', sans-serif"
  },
});

theme = responsiveFontSizes(theme);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}