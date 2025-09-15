import i18n from "i18next";

import { messages } from "./languages";

// Limpa completamente qualquer configuração anterior
localStorage.removeItem('i18nextLng');
sessionStorage.removeItem('i18nextLng');

// Força o idioma para português
localStorage.setItem('i18nextLng', 'pt');
sessionStorage.setItem('i18nextLng', 'pt');

i18n.init({
	debug: false,
	defaultNS: ["translations"],
	fallbackLng: "pt",
	lng: "pt", // Força o idioma para português
	ns: ["translations"],
	resources: messages,
	interpolation: {
		escapeValue: false
	}
});

// Força o idioma após a inicialização
i18n.changeLanguage('pt');

export { i18n };
