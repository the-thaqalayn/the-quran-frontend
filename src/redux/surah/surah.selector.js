import {createSelector} from 'reselect';

export const selectSurah= state => state.surah;

// export const selectChapterAndCurrentPage = createSelector(
//     [selectSurah],
//     surah =>({
//          chapter:surah.loadedSurah.chapter,
//          page:surah.loadedSurah.currentPage
//         })
// );
const defualtChapter={"id":1,"revelation_place":"makkah","revelation_order":5,"bismillah_pre":false,"name_simple":"Al-Fatihah","name_complex":"Al-Fātiĥah","name_arabic":"الفاتحة","verses_count":7,"pages":[1,1],"translated_name":{"language_name":"english","name":"The Opener"}};
export const selectCurrentSurah = createSelector(
    [selectSurah],
    surah => surah.loadedSurah.chapter
);

export const selectSurahList = createSelector(
    [selectSurah],
    surah => surah.chapters
);

export const selectCurrentSurahInfo = createSelector(
    [selectSurah],
    surah =>{ return surah.chapters.length>0 ? surah.chapters[surah.loadedSurah.chapter-1]:defualtChapter}
);

export const selectLoadedSurah = createSelector(
    [selectSurah],
    surah => surah.loadedSurah
);

export const selectLoadedFontFaces = createSelector(
    [selectSurah],
    surah => surah.loadedFontFaces
);