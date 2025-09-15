import { messages as portugueseMessages } from "./pt";
import { messages as englishMessages } from "./en";
import { messages as spanishMessages } from "./es";

const messages = {
	...englishMessages,
	...spanishMessages,
	...portugueseMessages, // Português por último para sobrescrever outros idiomas
};

export { messages };
