import * as Yup from "yup";

export type UserFormValues = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone: string;
};

export const userSchema = Yup.object({
  firstname: Yup.string().trim().required("وارد کردن نام الزامی است."),

  lastname: Yup.string().trim().required("وارد کردن نام خانوادگی الزامی است."),

  username: Yup.string().trim().required("وارد کردن نام کاربری الزامی است."),

  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست.")
    .required("وارد کردن ایمیل الزامی است."),

  password: Yup.string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد.")
    .required("وارد کردن رمز عبور الزامی است."),

  phone: Yup.string().trim().required("وارد کردن شماره تلفن الزامی است."),
});
