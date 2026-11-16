import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import { createUser } from "@/Utils/services/user.service";
import type { User } from "@/types/user/user.types";
import { userSchema, type UserFormValues } from "@/Validations/user.schema";

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
                <label htmlFor="firstname">نام</label>
                <Field id="firstname" name="firstname" placeholder="نام" />
                <ErrorMessage
                  name="firstname"
                  component="span"
                  className="error"
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastname">نام خانوادگی</label>
                <Field
                  id="lastname"
                  name="lastname"
                  placeholder="نام خانوادگی"
                />
                <ErrorMessage
                  name="lastname"
                  component="span"
                  className="error"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="username">نام کاربری</label>
              <Field id="username" name="username" placeholder="نام کاربری" />
              <ErrorMessage
                name="username"
                component="span"
                className="error"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">ایمیل</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
              <ErrorMessage name="email" component="span" className="error" />
            </div>

            <div className="form-field">
              <label htmlFor="password">رمز عبور</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="رمز عبور"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="error"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">شماره تلفن</label>
              <Field id="phone" name="phone" placeholder="شماره تلفن" />
              <ErrorMessage name="phone" component="span" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "در حال ثبت..." : "ثبت کاربر"}
            </button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};
