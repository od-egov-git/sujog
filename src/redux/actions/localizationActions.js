// src/redux/actions/localizationActions.js
export const SET_LANGUAGE = "SET_LANGUAGE";
export const LOAD_TRANSLATIONS = "LOAD_TRANSLATIONS";
export const CLEAR_TRANSLATIONS = "CLEAR_TRANSLATIONS";
export const SET_LOADING = "SET_LOADING"

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const loadTranslations = (language, translations) => ({
  type: LOAD_TRANSLATIONS,
  payload: { language, translations },
});

export const clearTranslations = (language, pageKey) => ({
    type: CLEAR_TRANSLATIONS,
    payload: { language, pageKey },
  });
  export const setLoader = (pageKey) => ({
    type: SET_LOADING,
    payload: { pageKey },
  });