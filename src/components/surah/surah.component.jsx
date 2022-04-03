import React from 'react';
import {Container,Box} from '@mui/material';
import {grey} from '@mui/material/colors';

// import logo from 'logo.svg';
 import 'App.css';
import Ayah from 'components/ayah/ayah.component';
const Surah = () => {

    return (

    //     <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <Box sx={{bgcolor:grey[100],pt:20,   minHeight: '100vh'}}>
        <Container> 
        <Ayah/>
        </Container>
    </Box>
    );
};
export default Surah;