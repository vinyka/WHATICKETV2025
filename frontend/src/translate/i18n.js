import i18n from "i18next";

import { messages } from "./languages";

// Força o idioma para português no localStorage antes de inicializar
localStorage.setItem('i18nextLng', 'pt');

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

// Log para verificar se as mensagens estão carregadas corretamente
console.log('i18n initialized with language:', i18n.language);
console.log('Available resources:', Object.keys(messages));
console.log('Portuguese messages loaded:', !!messages.pt);

export { i18n };
