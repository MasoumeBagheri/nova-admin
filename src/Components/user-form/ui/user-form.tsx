import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import { createUser } from "@/Utils/services/user.service";
import type { User } from "@/types/user/user.types";
import type { UserFormValues } from "@/Validations/user.schema";
import { createUserSchema } from "@/Validations/user.schema";
import { useTranslation } from "@/shared/i18n/use-translation";

type UserFormProps = {
  onSuccess: (user: User) => void;
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  label {
    color: var(--foreground);
    font-size: 13px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 7px;
    outline: none;
    background: var(--surface);
    color: var(--foreground);
    font-family: inherit;
    font-size: 13px;
    direction: ltr;
    text-align: left;

    &:focus {
      border-color: var(--accent);
    }
  }

  .error {
    color: #ef4444;
    font-size: 11px;
  }

  button {
    height: 42px;
    border: none;
    border-radius: 7px;
    background: var(--accent);
    color: white;
    font-family: inherit;
    font-size: 13px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

const initialValues: UserFormValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

export const UserForm = ({ onSuccess }: UserFormProps) => {
  const { t } = useTranslation();

  const userSchema = createUserSchema(t);

  const handleSubmit = async (values: UserFormValues) => {
    const user = await createUser({
      email: values.email,
      username: values.username,
      password: values.password,
      name: {
        firstname: values.firstname,
        lastname: values.lastname,
      },
      phone: values.phone,
    });

    onSuccess(user);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormWrapper>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstname">{t("userForm.firstname")}</label>
                <Field
                  id="firstname"
                  name="firstname"
                  placeholder={t("userForm.firstname")}
                />
                <ErrorMessage
                  name="firstname"
                  component="span"
                  className="error"
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastname">{t("userForm.lastname")}</label>
                <Field
                  id="lastname"
                  name="lastname"
                  placeholder={t("userForm.lastname")}
                />
                <ErrorMessage
                  name="lastname"
                  component="span"
                  className="error"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="username">{t("userForm.username")}</label>
              <Field
                id="username"
                name="username"
                placeholder={t("userForm.username")}
              />
              <ErrorMessage
                name="username"
                component="span"
                className="error"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">{t("userForm.email")}</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
              <ErrorMessage name="email" component="span" className="error" />
            </div>

            <div className="form-field">
              <label htmlFor="password">{t("userForm.password")}</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder={t("userForm.password")}
              />
              <ErrorMessage
                name="password"
                component="span"
                className="error"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">{t("userForm.phone")}</label>
              <Field
                id="phone"
                name="phone"
                placeholder={t("userForm.phone")}
              />
              <ErrorMessage name="phone" component="span" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("userForm.submitting") : t("userForm.submit")}
            </button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};
