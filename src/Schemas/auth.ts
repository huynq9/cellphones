import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Không đúng định dạng email")
    .required("Trường này là bắt buộc"),
  password: Yup.string().required("trường này là bắt buộc"),
});

export type signInType = Yup.InferType<typeof signInSchema>;

export const signUpSchema = Yup.object({
  name: Yup.string().required("Trường này là bắt buộc"),
  phone: Yup.number().min(10).required("Trường này là bắt buộc"),
  email: Yup.string()
    .email("Không đúng định dạng email")
    .required("Trường này là bắt buộc"),
  password: Yup.string().required("trường này là bắt buộc"),

  confirmPassword: Yup.string().required("Trường này là bắt buộc"),
});

export type signUpType = Yup.InferType<typeof signUpSchema>;
