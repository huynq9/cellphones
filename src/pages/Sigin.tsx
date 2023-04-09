import { useForm } from "react-hook-form";
import axios from "axios";
import { signIn } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInSchema, signInType } from "../Schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";

export const Sigin = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({ resolver: yupResolver(signInSchema) });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onHandleSubmit = async (data: signInType) => {
    try {
      const Res: any = await signIn(data);
      console.log(Res);

      console.log(
        "check : ",
        Res ? Res?.user?.role === "admin" : user?.user?.role === "admin"
      );
      console.log(
        "check : ",
        Res ? Res?.user?.role !== "admin" : user?.user?.role !== "admin"
      );
      if (true) {
        if (Res ? Res?.user?.role === "admin" : user?.user?.role === "admin") {
          alert("Đăng nhập thành công");

          return navigate("/admin/");
        }
        if (Res ? Res?.user?.role !== "admin" : user?.user?.role !== "admin") {
          alert("Đăng nhập thành công");
          return navigate("/");
        }
      }
    } catch (err) {
      // Nếu có lỗi, cập nhật state lỗi
      console.log(err);

      setError("Tài khoản hoặc mật khẩu không chính xác.");
    }
  };
  return (
    <section className="bg-gray-200 w-full h-screen flex ">
      <div className="flex w-5/12 m-auto border-2 rounded-lg">
        <div className=" bg-white">
          <form
            onSubmit={handleSubmit(onHandleSubmit)}
            className="flex flex-col mx-10"
          >
            <label htmlFor="" className="font-medium pt-20">
              Email
            </label>
            <input
              type="text"
              className="py-2 px-5 rounded-md border-2 w-[380px]"
              {...register("email")}
            />
            <span className="text-red-600 ">
              {errors.email && errors.email.message}
            </span>
            {error && <span className="text-red-600 mt-2">{error}</span>}
            <label htmlFor="" className="font-medium">
              Mật khẩu
            </label>
            <input
              type="password"
              className="py-2 px-5 rounded-md border-2"
              {...register("password")}
            />
            <span className="text-red-600 ">
              {errors.password && errors.password.message}
            </span>
            {error && <span className="text-red-600 mt-2">{error}</span>}
            <button className="bg-red-600 py-2 px-24 rounded-md mt-10 hover:bg-yellow-400 hover:text-black text-white">
              Đăng nhập
            </button>
          </form>
          <div className="flex flex-col justify-between items-center mt-6">
            <span>Hoặc đăng nhập bằng</span>
            <div className="flex justify-center mb-5 mt-5">
              <button className="px-2">
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </button>
              <button className="px-2">
                <i className="fa-brands fa-google fa-2xl"></i>
              </button>
            </div>
            <Link to="/signup" className="mb-20 hover:text-red-600">
              <span>Bạn chưa có tài khoản ? Đăng ký ngay !!</span>
            </Link>
          </div>
        </div>
        <div className="bg-[#D70018] flex align-items  ">
          <img
            src="/logo-cellphoneS.png"
            className="w-[70%] h-[70%] m-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
