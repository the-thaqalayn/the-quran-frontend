import * as React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import { CssBaseline,useMediaQuery} from '@mui/material';
import { createTheme,ThemeProvider} from '@mui/material/styles';

import {Container} from '@mui/material';
// import {grey} from '@mui/material/colors';

import SearchAppBar from 'components/header/header.component';
import Surah from 'components/surah/surah.component';



const theme = createTheme({
  typography: {
    surahName:{
      fontSize:38,
      fontFamily:'surah-name'
    },
  }, 
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'uthmani';
        src: url('${process.env.PUBLIC_URL}/assets/fonts/uthmani/uthmani.woff2') format('woff2') ,url('/assets/fonts/uthmani/uthmani.woff') format('woff'), url('${process.env.PUBLIC_URL}/assets/fonts/uthmani/uthmani.otf') format('opentype');
      }
      @font-face {
        font-family: 'surah-name';
        src: url('${process.env.PUBLIC_URL}/assets/fonts/v1/sura_names.woff2') format('woff2') ,url('/assets/fonts/v1/sura_names.woff') format('woff'), url('${process.env.PUBLIC_URL}/assets/fonts/v1/sura_names.ttf') format('truetype'), url('${process.env.PUBLIC_URL}/assets/fonts/v1/sura_names.eot') format('embedded-opentype');
      }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar/>
        {/* <Switch>
          <Route exact path='/' component="SearchAppBar" />
          <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
        </Switch> */}
        <Surah/>
    </ThemeProvider>
  );
}

export default App;
