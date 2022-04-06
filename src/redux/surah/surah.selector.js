import {createSelector} from 'reselect';

export const selectSurah= state => state.surah;

// export const selectChapterAndCurrentPage = createSelector(
//     [selectSurah],
//     surah =>({
//          chapter:surah.loadedSurah.chapter,
//          page:surah.loadedSurah.currentPage
//         })
// );

export const selectLoadedSurah = createSelector(
    [selectSurah],
    surah => surah.loadedSurah
);

export const selectLoadedFontFaces = createSelector(
    [selectSurah],
    surah => surah.loadedFontFaces
);