import {all,call,takeLatest,put,select} from 'redux-saga/effects';
import SurahActionTypes from './surah.types';
import {loadFontFaceSuccess,loadFontFaceFailure,loadSurahSuccess,loadSurahFailure} from './surah.actions';
import {selectLoadedSurah,selectLoadedFontFaces} from './surah.selector';
import {getFontFaceSource,getFontFaceNameForPage,fetchSurah,getSurahModel} from './surah.utils';

export function* loadSurahStart({payload:{chapter,page}}){
  try{
    const loadedSurah= yield select(selectLoadedSurah);

    if(loadedSurah.totalRecords <= loadedSurah.verses.length)
    return;

    var response= yield fetchSurah(chapter,page);
   
    if(!response) return;
    
    console.log('-------1s--------');
    console.log(response);    
    console.log('-------1e--------');
    
    const result=yield getSurahModel(response);
    result.chapter=chapter;
    console.log('*******2*******');
    console.log(result);
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
export function* onLoadSurahStart(){
 yield takeLatest(SurahActionTypes.LOAD_SURAH_START,loadSurahStart);
}
export function* onLoadFontFace(){
 yield takeLatest(SurahActionTypes.LOAD_SURAH_SUCCESS,loadFontFace);
}

export function* surahSagas(){
    yield all([
      call(onLoadSurahStart),
      call(onLoadFontFace)
    ]);
}