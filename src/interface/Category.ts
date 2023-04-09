import { IProducts } from "./Products";
import * as Yup from "yup";
export interface ICategory {
  _id: String | Number;
  name: String;
}

export const updateSchema = Yup.object({
  name: Yup.string().required("Trường này là bắt buộc"),
  price: Yup.number().required("Trường này là bắt buộc"),
  original_price: Yup.number().required("Trường này là bắt buộc"),
  categoryId: Yup.string().required("Trường này là bắt buộc"),
});
export type updateForm = Yup.InferType<typeof updateSchema>;
