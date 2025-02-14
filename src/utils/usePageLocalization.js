import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTranslations, setLoader } from '../redux/actions/localizationActions';

const usePageLocalization = (language, pageKey) => {
  const dispatch = useDispatch();
  const translations = useSelector((state) => state.localization.translations);
  const [hasLoaded, setHasLoaded] = useState(false); // Track if translations are loaded
  const isLoading = useRef(false); // Track if translations are currently loading
  const prevLanguage = useRef(language); // Track previous language

  useEffect(() => {
    // Check if translations for the current language and pageKey are already loaded
    if (!translations[language] || !translations[language][pageKey]) {
      if (!isLoading.current && !hasLoaded || prevLanguage.current !== language) {
        dispatch(setLoader(pageKey))
        isLoading.current = true; // Set loading flag

        const loadTranslationsFile = async () => {
          try {
            const response = await fetch(`/i18n/${language}/${pageKey}.json`); // Fetch translation file based on language and pageKey
            if (!response.ok) throw new Error("Translation file not found");

            const translationData = await response.json();

            // Dispatch translations to Redux store
            dispatch(loadTranslations(language, { [pageKey]: translationData }));
            setHasLoaded(true); // Mark translations as loaded after dispatching
            prevLanguage.current = language; // Update the previous language tracker
          } catch (error) {
            console.error("Error loading translations:", error);
          } finally {
            isLoading.current = false; // Reset loading flag after attempt
          }
        };

        loadTranslationsFile();
      }
    } else {
      setHasLoaded(true); // Mark as loaded if translations exist in the store
      prevLanguage.current = language; // Update the previous language tracker
    }
  }, [dispatch, language, pageKey, translations, hasLoaded]);

  return translations[language]?.[pageKey] || {}; // Return translations for the current language and pageKey
};

export default usePageLocalization;
