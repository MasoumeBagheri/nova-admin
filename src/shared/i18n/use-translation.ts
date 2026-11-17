import { useCallback } from "react";
import { useLanguage } from "./language-context";
import { dictionary, type TranslationKey } from "@/Dictionary";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = useCallback(
    (key: TranslationKey): string => dictionary[language][key],
    [language],
  );

  return { t, language };
};
