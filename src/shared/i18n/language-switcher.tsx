import styled from "styled-components";
import { useLanguage } from "./language-context";

const SwitcherButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const nextLanguage = language === "fa" ? "en" : "fa";

  return (
    <SwitcherButton
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === "fa" ? "Switch to English" : "Switch to Persian"}
      title={language === "fa" ? "English" : "فارسی"}
    >
      {language.toUpperCase()}
    </SwitcherButton>
  );
};
