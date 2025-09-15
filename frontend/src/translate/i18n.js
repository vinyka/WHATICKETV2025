import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from "./languages";

i18n.use(LanguageDetector).init({
	debug: false,
	defaultNS: ["translations"],
	fallbackLng: "pt",
	lng: "pt", // Força o idioma para português
	ns: ["translations"],
	resources: messages,
	detection: {
		order: ['localStorage'],
		caches: ['localStorage'],
		lookupLocalStorage: 'i18nextLng',
	}
});

// Força o idioma para português no localStorage
localStorage.setItem('i18nextLng', 'pt');

export { i18n };
