import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import type { ReactNode } from "react";

import { store, type AppDispatch } from "@/Redux/store";
import { ThemeProvider } from "@/shared/theme/theme-provider";
import { LanguageProvider } from "@/shared/i18n/language-provider";
import { getSavedAuth } from "@/Storage/auth-storage";
import { restoreAuth } from "@/Redux/auth.slice";

const AuthInitializer = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedAuth = getSavedAuth();

    dispatch(
      restoreAuth({
        user: savedAuth?.user ?? null,
        token: savedAuth?.token ?? null,
        isAuthenticated: Boolean(savedAuth?.token && savedAuth?.user),
      }),
    );
  }, [dispatch]);

  return null;
};

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <AuthInitializer />
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
};
