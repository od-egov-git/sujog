// src/redux/reducers/localizationReducer.js
import { SET_LANGUAGE, LOAD_TRANSLATIONS, CLEAR_TRANSLATIONS, SET_LOADING } from "../actions/localizationActions";

const initialState = {
    language: "en", // Default language
    translations: {}, // Store translations for the current language
    isLoading: true
};

const localizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case LOAD_TRANSLATIONS:
            return {
                ...state,
                isLoading: false,
                translations: {
                    ...state.translations,
                    [action.payload.language]: {
                        ...state.translations[action.payload.language], // Retain existing translations for the language
                        ...action.payload.translations, // Merge new translations for the page
                    },
                },
            };
        case CLEAR_TRANSLATIONS:
            const { language: clearLanguage, pageKey } = action.payload;
            if (state.translations[clearLanguage]) {
                const { [pageKey]: removed, ...remainingTranslations } = state.translations[clearLanguage];
                return {
                    ...state,
                    translations: {
                        ...state.translations,
                        [clearLanguage]: remainingTranslations,
                    },
                };
            }
            return state;
        default:
            return state;
    }
};

export default localizationReducer;
