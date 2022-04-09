import SurahActionTypes from "./surah.types";
import {} from './surah.utils';

const INITIAL_STATE ={
    loadedFontFaces: [],
    chapters:[],
    loadedSurah:{
        chapter:1,
        currentPage:1,
        nextPage:undefined,
        totalRecords: undefined,
        pageNumbers:undefined,
        verses:[
            // {
            //   verseKey:'',
            //   text:'',
            //   translation:'',
            //   sajdahNumber:null,
            //   pageNumber:null
            // }
        ]
     }
};

const surahReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {

      case SurahActionTypes.CHANGE_SURAH_START:
        {
              return {
                ...state,
                loadedSurah:{
                  chapter:action.payload.chapter,
                  currentPage:action.payload.page,
                  nextPage:undefined,
                  totalRecords: undefined,
                  pageNumbers:undefined,
                  verses:[]
               }
              };
        }

      case SurahActionTypes.LOAD_SURAH_LIST_SUCCESS:
        {
              return {
                ...state,
                chapters:action.payload,
              };
        }

        case SurahActionTypes.LOAD_SURAH_SUCCESS:
            {
                  return {
                    ...state,
                    loadedSurah:{
                      ...action.payload,
                      verses:[
                        ...state.loadedSurah.verses,
                        ...action.payload.verses
                      ]
                    } 
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