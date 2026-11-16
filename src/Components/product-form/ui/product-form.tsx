import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";

import { createProduct } from "@/Utils/services/product.service";
import type { Product } from "@/types/product/product.types";

import { productSchema } from "@/Validations/product.schema";
import type { ProductFormValues } from "@/types/product/product-form.types";
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
        text: "محصول با موفقیت ثبت شد.",
      });
    } catch {
      setMessage({
        type: "error",
        text: "افزودن محصول با خطا مواجه شد.",
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
              <label htmlFor="title">عنوان محصول</label>
              <Field id="title" name="title" placeholder="نام محصول" />
              <FormikErrorMessage name="title" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="price">قیمت</label>
              <Field
                id="price"
                name="price"
                type="number"
                placeholder="قیمت محصول"
              />
              <FormikErrorMessage name="price" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="description">توضیحات</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={4}
                placeholder="توضیحات محصول"
              />
              <FormikErrorMessage name="description" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="category">دسته‌بندی</label>
              <Field as="select" id="category" name="category">
                <option value="">انتخاب دسته‌بندی</option>
                <option value="electronics">الکترونیک</option>
                <option value="jewelery">زیورآلات</option>
                <option value="men's clothing">لباس مردانه</option>
                <option value="women's clothing">لباس زنانه</option>
              </Field>
              <FormikErrorMessage name="category" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="image">آدرس تصویر</label>
              <Field
                id="image"
                name="image"
                placeholder="https://example.com/image.jpg"
              />
              <FormikErrorMessage name="image" component={ErrorText} />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "در حال ثبت..." : "افزودن محصول"}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
