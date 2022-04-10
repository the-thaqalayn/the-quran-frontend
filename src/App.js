import * as React from 'react';
// import {Switch,Route,Redirect} from 'react-router-dom';

import { CssBaseline} from '@mui/material';
import { createTheme,ThemeProvider} from '@mui/material/styles';

// import {Container} from '@mui/material';
// import {grey} from '@mui/material/colors';

import SearchAppBar from 'components/header/header.component';
import Surah from 'components/surah/surah.component';
import uthmaniwoff2 from 'assets/fonts/uthmani/uthmani.woff2';
import uthmaniwoff from 'assets/fonts/uthmani/uthmani.woff';
import uthmaniotf from 'assets/fonts/uthmani/uthmani.otf';

import suranameswoff2 from 'assets/fonts/v1/sura_names.woff2';
import suranameswoff from 'assets/fonts/v1/sura_names.woff';
import suranamesttf from 'assets/fonts/v1/sura_names.ttf';
import suranameseot from 'assets/fonts/v1/sura_names.eot';


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
        src: url('${uthmaniwoff2}') format('woff2') ,url('${uthmaniwoff}') format('woff'), url('${uthmaniotf}') format('opentype');
      }
      @font-face {
        font-family: 'surah-name';
        src: url('${suranameswoff2}') format('woff2') ,url('${suranameswoff}') format('woff'), url('${suranamesttf}') format('truetype'), url('${suranameseot}') format('embedded-opentype');
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
