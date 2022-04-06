import {all,call,takeLatest,put,select} from 'redux-saga/effects';
import SurahActionTypes from './surah.types';
import {loadFontFaceSuccess,loadFontFaceFailure,loadSurahSuccess,loadSurahFailure} from './surah.actions';
import {selectLoadedFontFaces} from './surah.selector';
import {getFontFaceSource,getFontFaceNameForPage,fetchSurah,getSurahModel} from './surah.utils';

export function* loadSurahStart({payload:{chapter,page}}){
  try{
    var response= yield fetchSurah(chapter,page);
   
    if(!response) return;
    console.log(response);
    
    const result=getSurahModel(response);
    result.chapter=chapter;
    console.log('---****');
    console.log(result);
    yield put(loadSurahSuccess(result));
        
  }catch(error){
    yield put(loadSurahFailure(error));
  }

}

export function* loadFontFace({payload:{pageNumbers}}){

  try{
      const loadedFontFaces= yield select(selectLoadedFontFaces);

      pageNumbers.forEach(pageNumber => {
        if(!loadedFontFaces.includes(pageNumber) )
        {
          var fontFace = new FontFace(
                                  getFontFaceNameForPage(pageNumber), 
                                  getFontFaceSource(pageNumber));
          document.fonts.add(fontFace);
          fontFace.load();   
        }});


      yield put(loadFontFaceSuccess(pageNumbers));

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