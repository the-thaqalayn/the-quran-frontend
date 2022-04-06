import SurahActionTypes from './surah.types';

export const loadSurahStart = ({chapter,page}) =>({
    type: SurahActionTypes.LOAD_SURAH_START,
    payload: {chapter,page}
});
export const loadSurahSuccess = (data) =>({
    type: SurahActionTypes.LOAD_SURAH_SUCCESS,
    payload: data
});
export const loadSurahFailure = ({error}) =>({
    type: SurahActionTypes.LOAD_SURAH_FAILURE,
    payload: {error}
});
export const loadFontFace = (pageNumber) =>({
    type: SurahActionTypes.FONT_FACE_LOAD,
    payload: {pageNumber}
});
export const loadFontFaceSuccess = (pageNumbers) =>({
    type: SurahActionTypes.FONT_FACE_SUCCESS,
    payload:pageNumbers
});
export const loadFontFaceFailure = (error) =>({
    type: SurahActionTypes.FONT_FACE_FAILURE,
    payload:{error}
});
