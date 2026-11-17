import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";

import { createProduct } from "@/Utils/services/product.service";
import type { Product } from "@/types/product/product.types";

import { createProductSchema } from "@/Validations/product.schema";
import type { ProductFormValues } from "@/types/product/product-form.types";
import { useTranslation } from "@/shared/i18n/use-translation";

import {
  FormWrapper,
  FormGroup,
  ErrorText,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from "./product-form.styles";

type ProductFormProps = {
  onSuccess: (product: Product) => void;
};

const initialValues: ProductFormValues = {
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
};

export const ProductForm = ({ onSuccess }: ProductFormProps) => {
  const { t } = useTranslation();

  const productSchema = createProductSchema(t);

  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (
    values: ProductFormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    setMessage(null);

    try {
      const product = await createProduct(values);

      onSuccess(product);
      resetForm();

      setMessage({
        type: "success",
        text: t("products.created"),
      });
    } catch {
      setMessage({
        type: "error",
        text: t("products.createError"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      {message &&
        (message.type === "success" ? (
          <SuccessMessage>{message.text}</SuccessMessage>
        ) : (
          <ErrorMessage>{message.text}</ErrorMessage>
        ))}

      <Formik
        initialValues={initialValues}
        validationSchema={productSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <label htmlFor="title">{t("productForm.title")}</label>
              <Field
                id="title"
                name="title"
                placeholder={t("productForm.titlePlaceholder")}
              />
              <FormikErrorMessage name="title" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="price">{t("productForm.price")}</label>
              <Field
                id="price"
                name="price"
                type="number"
                placeholder={t("productForm.pricePlaceholder")}
              />
              <FormikErrorMessage name="price" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="description">
                {t("productForm.description")}
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={4}
                placeholder={t("productForm.descriptionPlaceholder")}
              />
              <FormikErrorMessage name="description" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="category">{t("productForm.category")}</label>
              <Field as="select" id="category" name="category">
                <option value="">{t("productForm.selectCategory")}</option>
                <option value="electronics">
                  {t("productForm.electronics")}
                </option>
                <option value="jewelery">{t("productForm.jewelery")}</option>
                <option value="men's clothing">
                  {t("productForm.mensClothing")}
                </option>
                <option value="women's clothing">
                  {t("productForm.womensClothing")}
                </option>
              </Field>
              <FormikErrorMessage name="category" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="image">{t("productForm.image")}</label>
              <Field
                id="image"
                name="image"
                placeholder="https://example.com/image.jpg"
              />
              <FormikErrorMessage name="image" component={ErrorText} />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? t("productForm.submitting")
                : t("productForm.submit")}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
