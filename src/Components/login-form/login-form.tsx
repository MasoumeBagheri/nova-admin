import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";

import { createLoginSchema } from "@/Validations/login.schema";
import type { LoginFormValues, AuthUser } from "@/types/auth/login.types";
import { login, type AuthState } from "@/Redux/auth.slice";
import { saveAuth } from "@/Storage/auth-storage";

import type { AppDispatch } from "@/Redux/store";
import { axiosInstance } from "@/Utils/api/axios-instance";
import { useTranslation } from "@/shared/i18n/use-translation";

import {
  FormWrapper,
  FormGroup,
  ErrorText,
  FormErrorMessage,
  SubmitButton,
} from "./login-form.styles";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [error, setError] = useState<string | null>(null);

  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  const loginSchema = createLoginSchema(t);

  const handleSubmit = async (values: LoginFormValues) => {
    setError(null);

    try {
      const { data } = await axiosInstance.post<{ token: string }>(
        "/auth/login",
        values,
      );

      const userResponse = await axiosInstance.get<AuthUser>("/users/1");

      dispatch(
        login({
          user: userResponse.data,
          token: data.token,
        }),
      );

      const authState: AuthState = {
        user: userResponse.data,
        token: data.token,
        isAuthenticated: true,
        isInitialized: true,
      };

      saveAuth(authState);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      setError(t("login.error"));
    }
  };

  return (
    <FormWrapper>
      <h2>{t("login.title")}</h2>

      {error && <FormErrorMessage>{error}</FormErrorMessage>}

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <label htmlFor="username">{t("login.username")}</label>
              <Field id="username" name="username" />
              <FormikErrorMessage name="username" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">{t("login.password")}</label>
              <Field id="password" name="password" type="password" />
              <FormikErrorMessage name="password" component={ErrorText} />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("login.submitting") : t("login.submit")}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
