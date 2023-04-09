import { instance } from "./instance";
import { IProducts } from "../interface/Products";
import { useNavigate, useParams } from "react-router-dom";
import { updateForm } from "../interface/Category";

export const getAll = (page: number, limit: number) => {
  // if (id) {
  //   return instance.get(`/products/${id}`);
  // }

  return instance.get(`/products?_page=${page}&_limit=${limit}`);
};
export const getOne = (id: string) => {
  return instance.get(`/products/${id}`);
};
export const update = (id: String, product: updateForm) => {
  const data = JSON.parse(localStorage.getItem("user") as string);
  const accessToken = data.accessToken;
  console.log(accessToken);

  if (!accessToken) {
    console.log("bạn chưa đăng nhập");
  }
  return instance.put(`/products/` + id, product, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const deleteProduct = (id: number | string) => {
  const data = JSON.parse(localStorage.getItem("user") as string);
  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  });
};
export const createProduct = (product: IProducts) => {
  const data = JSON.parse(localStorage.getItem("user") as string);
  const accessToken = data.accessToken;

  if (!accessToken) {
    console.log("bạn chưa đăng nhập");
  }
  console.log(product);

  return instance.post("/products", product, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const UploadImage = (data: any) => {
  const name = "dwb9qumu6";
  return instance.post(
    `https://api.cloudinary.com/v1_1/${name}/image/upload`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
};
