import type { AuthState } from "@/Redux/auth.slice";

const STORAGE_KEY = "nova-auth";

export const saveAuth = (auth: AuthState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
};

export const getSavedAuth = (): AuthState | null => {
  const savedAuth = localStorage.getItem(STORAGE_KEY);

  if (!savedAuth) return null;

  try {
    return JSON.parse(savedAuth) as AuthState;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

export const clearAuth = () => {
  localStorage.removeItem(STORAGE_KEY);
};
