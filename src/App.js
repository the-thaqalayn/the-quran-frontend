import * as React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import { CssBaseline,useMediaQuery} from '@mui/material';
import { createTheme,ThemeProvider} from '@mui/material/styles';

import {Container} from '@mui/material';
import {grey} from '@mui/material/colors';

import SearchAppBar from 'components/header/header.component';
import Surah from 'components/surah/surah.component';
function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
