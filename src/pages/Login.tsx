import { useForm } from "react-hook-form";
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (data: any) => {};
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
              className="py-2 px-24 rounded-md border-2"
              {...register("email")}
            />

            <label htmlFor="" className="font-medium">
              Mật khẩu
            </label>
            <input
              type="password"
              className="py-2 px-24 rounded-md border-2"
              {...register("password")}
            />
            <button className="bg-red-600 py-2 px-24 rounded-md mt-10 hover:bg-yellow-400 hover:text-black text-white">
              Đăng nhập
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
