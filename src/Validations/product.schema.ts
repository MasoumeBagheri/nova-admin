import * as Yup from "yup";

export const productSchema = Yup.object({
  title: Yup.string().trim().required("عنوان محصول الزامی است"),

  price: Yup.number()
    .typeError("قیمت باید عدد باشد")
    .positive("قیمت باید بیشتر از صفر باشد")
    .required("قیمت الزامی است"),

  description: Yup.string().trim().required("توضیحات محصول الزامی است"),

  category: Yup.string().required("انتخاب دسته‌بندی الزامی است"),

  image: Yup.string()
    .url("آدرس تصویر معتبر نیست")
    .required("آدرس تصویر الزامی است"),
});
