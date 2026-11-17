import fa from "./fa";
import en from "./en";

export const dictionary = { fa, en };

export type TranslationKey = keyof typeof fa;
