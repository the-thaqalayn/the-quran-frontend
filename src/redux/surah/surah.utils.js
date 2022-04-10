import axios from "axios";
import _ from 'lodash';
import Translation from 'data/Translation.json';

export const getFontFaceSource = (pageNumber) =>{

    return `url('${process.env.PUBLIC_URL}/assets/fonts/v1/p${pageNumber}.woff2') format('woff2') ,url('/assets/fonts/v1/p${pageNumber}.woff') format('woff'), url('${process.env.PUBLIC_URL}/assets/fonts/v1/p${pageNumber}.ttf') format('truetype')`;
};
export const getFontFaceNameForPage = (pageNumber) => {
    return `p${pageNumber}` ;
}

export const fetchSurah=(chapter,page)=>{
     return axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${chapter}?language=en&words=true&page=${page}&per_page=10`)
       
};

export const fetchTranslation=async (verseKey)=>{
  const key=verseKey.replace(':','%3A');
    const response= await axios.get(`https://api.quran.com/api/v4/quran/translations/29?verse_key=${key}`);
    console.log(response);
     return response.data.translations[0].text;
};

export const fetchLegacyTranslation=async ({chapter,id})=>{
 // const arr=verseKey.split(":");
  //  const response= await axios.get(`https://legacy.quran.com/quran/ajax?s=${arr[0]}&sA=${arr[1]}&eA=${arr[1]}&l=1%2C19&json=1`);
    // console.log(arr);
    // let data= Translation["chapters"][parseInt(arr[0])][arr[1]]['ayah']['text'];
     let data= Translation[chapter-1][id.toString()]['ayah']['text'];
     console.log(data);
     return data;
};

export const fetchSurahList=async ()=>{  
    const response= await axios.get(`https://api.quran.com/api/v4/chapters?language=en`);   
     return response.data.chapters;
};

export const getSurahModel=async (response)=>{
  var result={};
 // {chapter,currentPage,nextPage,pageNumbers,verses:[{key,text,sajdahNumber}]
  // result.chapter=response.data.pagination.chapter;
  result.currentPage=response.data.pagination.current_page;
  result.nextPage=response.data.pagination.next_page;
  result.totalPages=response.data.pagination.total_pages;
  result.totalRecords=response.data.pagination.total_records;
  result.pageNumbers= [...new Set(response.data.verses.map(v => v.page_number))];
  result.verses= await Promise.all(response.data.verses.map(async v =>{

    return {
    verseKey:v.verse_key,
    sajdahNumber:v.sajdah_number,
    pageNumber:v.page_number,
    text: v.words.map(w=>w.text).join(''),
    translation: await fetchLegacyTranslation({chapter:v.verse_key.split(':')[0],id:v.id})
  }
}));

return result;
 
}
