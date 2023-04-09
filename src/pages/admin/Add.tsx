import { MdOutlineAddBox } from "react-icons/md";
import { useForm } from "react-hook-form";
import { IProducts } from "../../interface/Products";
import { createProduct } from "../../api/products";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/categories";
import { Categories } from "../../components/admin/Categories";
import { ICategory } from "../../interface/Category";
import { Navigate, useNavigate } from "react-router-dom";
import { AddProduct, AddProductSchema } from "../../Schemas/products";
import { yupResolver } from "@hookform/resolvers/yup";

export const Add = () => {
  const navigate = useNavigate();
  const [cate, setCate] = useState<ICategory[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddProduct>({
    resolver: yupResolver(AddProductSchema),
  });
  const fetchCate = async () => {
    // const Res: any = await getCategories();

    // if (Res && Res.data) {
    //   const { categories } = Res.data;
    //   setCate(categories);
    // }
    const {
      data: { categories },
    } = await getCategories();
    setCate(categories);
  };
  useEffect(() => {
    fetchCate();
  }, []);

  const onHandleSubmit = async (product: IProducts) => {
    console.log(product);
    try {
      await createProduct(product);
      alert("Thêm sản phẩm thành công");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(() => onHandleSubmit())}>
      <div className="flex justify-between  ">
        <h1 className="text-2xl font-bold">Thêm sản phẩm</h1>
      </div>
      <div className="flex relative">
        <div className="w-3/12 shadow-md absolute">
          <div className="mx-auto my-[15%]">
            <label htmlFor="drop" className=" text-center block cursor-pointer">
              <MdOutlineAddBox size={24} className="mx-auto" />
              Thêm ảnh
              <input type="file" hidden name="" id="drop" />
            </label>
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
              {...register("name")}
              className="w-full p-2 mt-2 border rounded-md"
            />
            <span className="text-red-600 ">
              {errors.name && errors.name.message}
            </span>
          </div>
          <div className="flex gap-10 p-3">
            <div className="w-[49%]">
              <span>Giá gốc</span>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded-md"
                {...register("original_price")}
              />
              <span className="text-red-600 ">
                {errors.original_price && errors.original_price.message}
              </span>
            </div>
            <div className="w-[49%]">
              <span>Giá khuyến mại</span>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded-md"
                {...register("price")}
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
          </div>
          <div className="p-3">
            <label htmlFor="" className="">
              Đặc điểm nổi bật
            </label>
            <input
              type="text"
              className="w-full border rounded-md pb-20"
              {...register("properties")}
            />
            <span className="text-red-600 ">
              {errors.properties && errors.properties.message}
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
            />
            <span className="text-red-600 ">
              {errors.desc && errors.desc.message}
            </span>
          </div>
          <button
            type="submit"
            className="p-3 ml-3 my-5 bg-[#00B0D7] rounded-lg text-white"
          >
            Thêm mới
          </button>
        </div>
      </div>
    </form>
  );
};
