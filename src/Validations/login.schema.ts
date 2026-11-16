import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("نام کاربری الزامی است"),
  password: Yup.string().required("رمز عبور الزامی است"),
});
