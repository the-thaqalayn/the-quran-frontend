import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {Container,Box} from '@mui/material';
import {grey} from '@mui/material/colors';

import {loadSurahStart} from 'redux/surah/surah.actions';
import {selectLoadedSurah} from 'redux/surah/surah.selector';
import {fetchSurah} from 'redux/surah/surah.utils';
// import logo from 'logo.svg';
 import 'App.css';
import Ayah from 'components/ayah/ayah.component';
import Bismillah from 'components/bismillah/bismillah.component';
// import InfiniteScroll from 'react-infinite-scroller';
const CHAPTERS_WITHOUT_BISMILLAH = [1, 9];

// const Surah = () => {
const Surah = ({loadedSurah:{chapter,currentPage,verses},loadSurahStart}) => {

        useEffect(()=>{
            loadSurahStart({chapter,currentPage});
        },[chapter,currentPage]);

        const sayHello = ()=> {
          alert('You clicked me!');
          loadSurahStart({chapter,currentPage});
        }

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
    <Box sx={{bgcolor:grey[100],pt:12,   minHeight: '100vh'}}>
    {!CHAPTERS_WITHOUT_BISMILLAH.includes(chapter) && <Bismillah />}
    
        <button onClick={sayHello} >load more</button>
        <Container> 
            {verses.map((v)=>(
                <Ayah key={v.verseKey} {...v}/>
            ))}
        </Container>
    </Box>
    );
};

const mapStateToProps = createStructuredSelector({
    loadedSurah: selectLoadedSurah
  });
const mapDispatchToProps = dispatch =>({
    loadSurahStart: (data)=>dispatch(loadSurahStart(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Surah);
// export default Surah;