import { ThemeSwitcher } from "@/shared/theme/theme-switcher";
import { LanguageSwitcher } from "@/shared/i18n/language-switcher";
import { useTranslation } from "@/shared/i18n/use-translation";

import {
  SidebarWrapper,
  Logo,
  LogoIcon,
  Navigation,
  NavigationLink,
  NavIcon,
  SidebarFooter,
  UserAvatar,
  UserInfo,
  SidebarActions,
} from "./sidebar.styles";

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <SidebarWrapper>
      <Logo>
        <LogoIcon>▰</LogoIcon>
        <span>NOVA</span>
      </Logo>

      <Navigation>
        <NavigationLink to="/" end>
          <NavIcon>▦</NavIcon>
          <span>{t("sidebar.dashboard")}</span>
        </NavigationLink>

        <NavigationLink to="/products">
          <NavIcon>▤</NavIcon>
          <span>{t("sidebar.products")}</span>
        </NavigationLink>

        <NavigationLink to="/users">
          <NavIcon>♙</NavIcon>
          <span>{t("sidebar.users")}</span>
        </NavigationLink>
      </Navigation>

      <SidebarActions>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </SidebarActions>

      <SidebarFooter>
        <UserAvatar>{t("sidebar.systemAdmin").charAt(0)}</UserAvatar>
        <UserInfo>
          <strong>{t("sidebar.systemAdmin")}</strong>
          <span>{t("sidebar.storeManager")}</span>
        </UserInfo>
      </SidebarFooter>
    </SidebarWrapper>
  );
};
