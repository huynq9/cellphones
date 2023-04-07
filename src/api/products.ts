import { instance } from "./instance";
import { IProducts } from "../interface/Products";
export const get = () => {
  instance.get("/products");
};
export const create = (product: IProducts) => {
  instance.post("/products", product);
};
