import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IProducts } from "../../interface/Products";
import { getOne, update } from "../../api/products";
import { getCategories } from "../../api/categories";
import { ICategory, updateForm, updateSchema } from "../../interface/Category";
import { Categories } from "../../components/admin/Categories";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProduct, AddProductSchema } from "../../Schemas/products";

export const Edit = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const { id } = useParams();
  const [cate, setCate] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProducts[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddProduct>({
    resolver: yupResolver(AddProductSchema),
  });
  const fetchCate = async () => {
    const {
      data: { categories },
    } = await getCategories();
    setCate(categories);
    console.log(categories);
  };

  console.log(cate);

  const fetchProductById = async (id: string) => {
    const {
      data: { data },
    } = await getOne(id);
    setProduct(data);
  };

  useEffect(() => {
    fetchCate();
    if (id) {
      fetchProductById(id);
    }
  }, []);
  const onHandleSubmit = async (product: AddProduct) => {
    try {
      if (id) {
        await update(id, product);
        alert("Cập nhật sản phẩm thành công");
        navigate("/admin/");
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="flex justify-between mx-">
        <h1 className="text-2xl font-bold">Cập nhật sản phẩm</h1>
      </div>
      <div className="flex relative">
        <div className="w-3/12 shadow-md absolute">
          <div className="mx-auto my-[15%]">
            <img src="/product4.png" className="mx-auto" alt="" />
          </div>
          <div className=" border rounded-xl">
            <input
              type="text"
              className="w-full pb-20 pt-2 pl-2"
              defaultValue="Mô tả ngắn: "
            />
          </div>
        </div>
        <div className="w-8/12 mx-auto absolute right-14">
          <div className="w-full border-b pb-4 px-4 font-medium">
            <span className="">Thông tin sản phẩm</span>
          </div>
          <div className="p-3">
            <span className="">Tên sản phẩm</span>
            <input
              type="text"
              className="w-full p-2 mt-2 border rounded-md"
              {...register("name")}
              defaultValue={product.name}
            />
            <span className="text-red-600 ">
              {errors.name && errors.name.message}
            </span>
          </div>
          <div className="flex gap-10 p-3">
            <div className="w-[49%]">
              <span>Giá gốc</span>
              <input
                type="number"
                className="w-full p-2 mt-2 border rounded-md"
                {...register("original_price")}
                defaultValue={product.original_price}
              />
              <span className="text-red-600 ">
                {errors.original_price && errors.original_price.message}
              </span>
            </div>
            <div className="w-[49%]">
              <span>Giá khuyến mại</span>
              <input
                type="number"
                className="w-full p-2 mt-2 border rounded-md"
                {...register("price")}
                defaultValue={product.price}
              />
              <span className="text-red-600 ">
                {errors.price && errors.price.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col p-3 w-[50%]">
            <span>Danh mục sản phẩm </span>
            <select
              id=""
              className="border rounded-md py-2"
              {...register("categoryId")}
            >
              <option value="">Chọn danh mục</option>
              {cate.map((item, index) => (
                <Categories data={item} index={index + 1} key={index} />
              ))}
            </select>
            <span className="text-red-600 ">
              {errors.categoryId && errors.categoryId.message}
            </span>
            <div className="p-3">
              <label htmlFor="" className="">
                Đặc điểm nổi bật
              </label>
              <input
                type="text"
                className="w-full border rounded-md pb-20"
                {...register("properties")}
                defaultValue={product.properties}
              />
              <span className="text-red-600 ">
                {errors.desc && errors.desc.message}
              </span>
            </div>
            <div className="p-3">
              <label htmlFor="" className="">
                Mô tả dài
              </label>
              <input
                type="text"
                className="w-full border rounded-md pb-20"
                {...register("desc")}
                defaultValue={product.desc}
              />
              <span className="text-red-600 ">
                {errors.desc && errors.desc.message}
              </span>
            </div>
            <button className="p-3 ml-3 my-5 bg-[#00B0D7] rounded-lg text-white">
              Sửa sản phẩm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
