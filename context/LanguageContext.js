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

    const applyDirection = (lang) => {
        if (typeof document === 'undefined') return;
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'ltr'); // <html> reste LTR pour structure générale
            document.body.setAttribute('dir', 'rtl');            // <body> passe RTL
            document.documentElement.classList.add('lang-ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.setAttribute('dir', 'ltr');
            document.documentElement.classList.remove('lang-ar');
        }
    };
    
    // Load saved language on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('atr_language');
        if (savedLang && dictionaries[savedLang]) {
            setLanguage(savedLang);
            applyDirection(savedLang);
        } else {
            applyDirection('fr');
        }
    }, []);

    const changeLanguage = (lang) => {
        if (dictionaries[lang]) {
            setLanguage(lang);
            localStorage.setItem('atr_language', lang);
            applyDirection(lang);
        }
    };

    // Helper to get nested translation keys (e.g. t("menu.home"))
    const t = (key, fallback) => {
        if (!key) return fallback !== undefined ? fallback : '';
        const keys = key.split('.');
        
        // 1. Try active language
        let value = dictionaries[language];
        let found = true;
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                found = false;
                break;
            }
        }
        if (found && value !== undefined && value !== '') {
            return value;
        }

        // 2. Fallback to French if not found in current language
        if (language !== 'fr') {
            let frValue = dictionaries.fr;
            let frFound = true;
            for (const k of keys) {
                if (frValue && frValue[k] !== undefined) {
                    frValue = frValue[k];
                } else {
                    frFound = false;
                    break;
                }
            }
            if (frFound && frValue !== undefined && frValue !== '') {
                return frValue;
            }
        }

        // 3. Fallback argument or key
        return fallback !== undefined ? fallback : key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, isRTL: language === 'ar' }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
