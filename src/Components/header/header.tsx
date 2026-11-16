import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "@/Redux/auth.slice";
import { clearAuth } from "@/Storage/auth-storage";
import type { RootState, AppDispatch } from "@/Redux/store";

import { HeaderWrapper, HeaderTitle, HeaderActions } from "./header.styles";

const pageTitles: Record<string, string> = {
  "/": "داشبورد",
  "/products": "مدیریت محصولات",
  "/users": "مدیریت کاربران",
};

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    clearAuth();
    navigate("/login", { replace: true });
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>{pageTitles[pathname] ?? "NOVA Admin"}</HeaderTitle>

      <HeaderActions>
        {user && <span>{user.username}</span>}

        <button type="button" onClick={handleLogout}>
          خروج
        </button>
      </HeaderActions>
    </HeaderWrapper>
  );
};
