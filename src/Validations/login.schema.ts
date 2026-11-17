import * as Yup from "yup";
import type { TranslationKey } from "@/Dictionary";

type Translate = (key: TranslationKey) => string;

export const createLoginSchema = (t: Translate) =>
  Yup.object({
    username: Yup.string().required(t("login.usernameRequired")),
    password: Yup.string().required(t("login.passwordRequired")),
  });
