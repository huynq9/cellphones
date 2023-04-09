import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUp } from "../api/auth";
import { signUpSchema, signUpType } from "../Schemas/auth";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({ resolver: yupResolver(signUpSchema) });
  const onHandleSubmit = async (data: signUpType) => {
    try {
      await signUp(data);
      alert("Đăng kí thành công");
      navigate("/signin");
    } catch (error) {}

    return;
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
              Name
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border-2 w-[380px]"
              {...register("name")}
            />
            <span className="text-red-600 ">
              {errors.name && errors.name.message}
            </span>
            <label htmlFor="" className="font-medium ">
              Email
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border-2"
              {...register("email")}
            />
            <span className="text-red-600 ">
              {errors.email && errors.email.message}
            </span>
            <label htmlFor="" className="font-medium">
              Số điện thoại
            </label>
            <input
              type="number"
              className="py-2 px-3 rounded-md border-2"
              {...register("phone")}
            />
            <span className="text-red-600 ">
              {errors.phone && errors.phone.message}
            </span>
            <label htmlFor="" className="font-medium">
              Mật khẩu
            </label>
            <input
              type="password"
              className="py-2 px-3 rounded-md border-2"
              {...register("password")}
            />
            <span className="text-red-600 ">
              {errors.password && errors.password.message}
            </span>
            <label htmlFor="" className="font-medium">
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              className="py-2 px-3 rounded-md border-2"
              {...register("confirmPassword")}
            />
            <span className="text-red-600 ">
              {errors.confirmPassword && errors.confirmPassword.message}
            </span>
            <button className="bg-red-600 py-2 px-24 rounded-md mt-10 hover:bg-yellow-400 hover:text-black text-white">
              Đăng ký
            </button>
          </form>
          <div className="flex flex-col justify-between items-center mt-6">
            <span>Hoặc đăng nhập bằng</span>
            <div className="flex justify-center mb-20 mt-5">
              <button className="px-2">
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </button>
              <button className="px-2">
                <i className="fa-brands fa-google fa-2xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#D70018] flex align-items ">
          <img src="/logo-cellphoneS.png" className="w-[]" alt="" />
        </div>
      </div>
    </section>
  );
};
