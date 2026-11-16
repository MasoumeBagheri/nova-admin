import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/shared/theme/theme-context";

const ThemeButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const ThemeContent = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ThemeIcon = styled.span`
  display: flex;
  align-items: center;
  color: #fbbf24;
`;

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeButton type="button" onClick={toggleTheme}>
      <ThemeContent>
        <ThemeIcon>
          {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
        </ThemeIcon>
        <span>{theme === "light" ? "حالت تاریک" : "حالت روشن"}</span>
      </ThemeContent>
    </ThemeButton>
  );
};
