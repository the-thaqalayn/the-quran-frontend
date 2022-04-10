import {all,call,takeLatest,put,select} from 'redux-saga/effects';
import SurahActionTypes from './surah.types';
import {
    loadFontFaceSuccess,loadFontFaceFailure,
    loadSurahListSuccess,loadSurahListFailure,
    loadSurahSuccess,loadSurahFailure,
    loadSurahStart} from './surah.actions';
import {selectSurahList,selectLoadedFontFaces} from './surah.selector';
import {getFontFaceSource,getFontFaceNameForPage,fetchSurahList,fetchSurah,getSurahModel} from './surah.utils';

export function* loadSurahListStart(){
  try{
    const chapters= yield select(selectSurahList);

    if(chapters.length>0)
    return;

    var result= yield fetchSurahList();
   
    if(!result) return;    
    
    yield put(loadSurahListSuccess(result));
        
  }catch(error){
    yield put(loadSurahListFailure(error));
  }

}

export function* changeSurahStart({payload}){  
    yield put(loadSurahStart(payload));
}
export function* loadSurahStartFunc({payload:{chapter,page}}){
  try{
   // const loadedSurah= yield select(selectLoadedSurah);

    // if(loadedSurah.totalRecords <= loadedSurah.verses.length)
    // return;
    var response= yield fetchSurah(chapter,page);
    
    if(!response) return;
    
    
    const result=yield getSurahModel(response);
    result.chapter=chapter;
    yield put(loadSurahSuccess(result));
        
  }catch(error){
    yield put(loadSurahFailure(error));
  }

}

export function* loadFontFace({payload:{pageNumbers}}){

  try{
      const loadedFontFaces= yield select(selectLoadedFontFaces);

      const loadedpageNumbers=[];
      pageNumbers.forEach(pageNumber => {
        if(!loadedFontFaces.includes(pageNumber) )
        {
          var fontFace = new FontFace(
                                  getFontFaceNameForPage(pageNumber), 
                                  getFontFaceSource(pageNumber));
          document.fonts.add(fontFace);
          fontFace.load();   
          loadedpageNumbers.push(pageNumber);
        }});

        yield put(loadFontFaceSuccess(loadedpageNumbers));

    }catch(error){
      yield put(loadFontFaceFailure(error));
    }

}
export function* onLoadSurahListStart(){
 yield takeLatest(SurahActionTypes.LOAD_SURAH_LIST_START,loadSurahListStart);
}
export function* onChangeSurahStart(){
 yield takeLatest(SurahActionTypes.CHANGE_SURAH_START,changeSurahStart);
}
export function* onLoadSurahStart(){
 yield takeLatest(SurahActionTypes.LOAD_SURAH_START,loadSurahStartFunc);
}
export function* onLoadFontFace(){
 yield takeLatest(SurahActionTypes.LOAD_SURAH_SUCCESS,loadFontFace);
}

export function* surahSagas(){
    yield all([
      call(onLoadSurahListStart),
      call(onChangeSurahStart),
      call(onLoadSurahStart),
      call(onLoadFontFace)
    ]);
}