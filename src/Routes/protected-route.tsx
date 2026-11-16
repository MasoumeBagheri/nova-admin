import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "@/Redux/store";

export const ProtectedRoute = () => {
  const { isAuthenticated, isInitialized } = useSelector(
    (state: RootState) => state.auth,
  );

  if (!isInitialized) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
