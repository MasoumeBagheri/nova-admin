import * as Yup from "yup";
import type { TranslationKey } from "@/Dictionary";

export type UserFormValues = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone: string;
};

type Translate = (key: TranslationKey) => string;

export const createUserSchema = (t: Translate) =>
  Yup.object({
    firstname: Yup.string().trim().required(t("validation.firstname")),

    lastname: Yup.string().trim().required(t("validation.lastname")),

    username: Yup.string().trim().required(t("validation.username")),

    email: Yup.string()
      .email(t("validation.email"))
      .required(t("validation.emailRequired")),

    password: Yup.string()
      .min(6, t("validation.passwordMin"))
      .required(t("validation.passwordRequired")),

    phone: Yup.string().trim().required(t("validation.phone")),
  });
