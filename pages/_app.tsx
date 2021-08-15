import '../styles/globals.css';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/navigation/Footer';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

let theme = createTheme({
  palette : {
    primary : {
      main : '#A9DFAF'
    },
    secondary : {
      main : '#000000'
    }
  },
  typography : {
    fontFamily : "'Open Sans', sans-serif"
  }
});

theme = responsiveFontSizes(theme);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={ MomentUtils }>
      <ThemeProvider theme={ theme }>
        <main style={ { minHeight : '100vh' } }>
          <div>
            <NavBar />
            <Component { ...pageProps } />
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}
