import { ThemeSwitcher } from "@/shared/theme/theme-switcher";

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
  return (
    <SidebarWrapper>
      <Logo>
        <LogoIcon>▰</LogoIcon>
        <span>NOVA</span>
      </Logo>

      <Navigation>
        <NavigationLink to="/" end>
          <NavIcon>▦</NavIcon>
          <span>داشبورد</span>
        </NavigationLink>

        <NavigationLink to="/products">
          <NavIcon>▤</NavIcon>
          <span>محصولات</span>
        </NavigationLink>

        <NavigationLink to="/users">
          <NavIcon>♙</NavIcon>
          <span>کاربران</span>
        </NavigationLink>
      </Navigation>

      <SidebarActions>
        <ThemeSwitcher />
      </SidebarActions>

      <SidebarFooter>
        <UserAvatar>ن</UserAvatar>
        <UserInfo>
          <strong>مدیر سیستم</strong>
          <span>مدیر فروشگاه</span>
        </UserInfo>
      </SidebarFooter>
    </SidebarWrapper>
  );
};
