import * as React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/header/header.component'
function App() {
  return (
    <div className="App">
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

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
