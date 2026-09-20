'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';
import en from '../locales/en.json';

const dictionaries = { fr, ar, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Default to 'fr' if no language is saved
    const [language, setLanguage] = useState('fr');
    
    // Load saved language on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('atr_language');
        if (savedLang && dictionaries[savedLang]) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        if (dictionaries[lang]) {
            setLanguage(lang);
            localStorage.setItem('atr_language', lang);
            
            // Adjust body dir for Arabic RTL
            if (lang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.classList.add('lang-ar');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.classList.remove('lang-ar');
            }
        }
    };

    // Helper to get nested translation keys (e.g. t("menu.home"))
    const t = (key) => {
        const keys = key.split('.');
        let value = dictionaries[language];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
