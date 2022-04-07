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
    p348:{
      fontSize:30,
      fontFamily:'p348'
    },
  }, 
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'uthmani';
          src: url('${process.env.PUBLIC_URL}/assets/fonts/uthmani/uthmani.woff2') format('woff2') ,url('/assets/fonts/uthmani/uthmani.woff') format('woff'), url('${process.env.PUBLIC_URL}/assets/fonts/uthmani/uthmani.otf') format('truetype');
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
