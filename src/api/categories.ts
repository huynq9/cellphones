import { ICategory } from "../interface/Category";
import { instance } from "./instance";
export const getCategories = (): Promise<ICategory> => {
  return instance.get("/categories");
};
