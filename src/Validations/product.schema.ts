import * as Yup from "yup";
import type { TranslationKey } from "@/Dictionary";

type Translate = (key: TranslationKey) => string;

export const createProductSchema = (t: Translate) =>
  Yup.object({
    title: Yup.string().trim().required(t("validation.productTitle")),

    price: Yup.number()
      .typeError(t("validation.priceNumber"))
      .positive(t("validation.pricePositive"))
      .required(t("validation.priceRequired")),

    description: Yup.string().trim().required(t("validation.description")),

    category: Yup.string().required(t("validation.category")),

    image: Yup.string()
      .url(t("validation.imageUrl"))
      .required(t("validation.imageRequired")),
  });
