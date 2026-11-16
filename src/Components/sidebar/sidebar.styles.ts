import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.aside`
  width: 240px;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 26px 16px 20px;
  background: #172b49;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 12px 36px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const LogoIcon = styled.span`
  color: #f97316;
  font-size: 25px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 13px;
  min-height: 46px;
  padding: 0 14px;
  border-radius: 7px;
  color: #c5d0df;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  &.active {
    background: #3563e9;
    color: #ffffff;
  }
`;

export const NavIcon = styled.span`
  width: 20px;
  text-align: center;
  font-size: 19px;
`;

export const SidebarFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 8px 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #3563e9;
  color: #ffffff;
  font-weight: 700;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: #ffffff;
    font-size: 12px;
  }

  span {
    color: #aab8ca;
    font-size: 11px;
  }
`;

export const SidebarActions = styled.div`
  margin-top: auto;
  padding: 16px 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;
