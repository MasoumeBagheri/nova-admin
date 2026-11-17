import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/shared/theme/theme-context";

const ThemeButton = styled.button`
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
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeButton
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </ThemeButton>
  );
};
