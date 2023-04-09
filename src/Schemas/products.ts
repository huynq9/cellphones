import * as Yup from "yup";
export const AddProductSchema = Yup.object({
  _id: Yup.string(),
  name: Yup.string().required("Trường này là bắt buộc"),
  price: Yup.number().required("Trường này là bắt buộc"),
  original_price: Yup.number().required("Trường này là bắt buộc"),
  desc: Yup.string().required("Trường này là bắt buộc"),
  properties: Yup.string().required("Trường này là bắt buộc"),
  categoryId: Yup.string().required("Trường này là bắt buộc"),
});
export type AddProduct = Yup.InferType<typeof AddProductSchema>;
