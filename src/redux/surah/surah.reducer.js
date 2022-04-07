import SurahActionTypes from "./surah.types";
import {} from './surah.utils';

const INITIAL_STATE ={
    loadedFontFaces: [],
    loadedSurah:{
        chapter:114,
        currentPage:1,
        nextPage:null,
        pageNumbers:null,
        verses:[
            {
              verseKey:'',
              text:'',
              translation:'',
              sajdahNumber:null,
              pageNumber:null
            }
        ]
     }
};

const surahReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {

        case SurahActionTypes.LOAD_SURAH_SUCCESS:
            {
                  return {
                    ...state,
                    loadedSurah: action.payload
                  };
            }

        case SurahActionTypes.FONT_FACE_SUCCESS:
            {
                  return {
                    ...state,
                    loadedFontFaces: [...state.loadedFontFaces, ...action.payload],
                  };
            }
        default:
            return state;
    }
};
export default surahReducer;