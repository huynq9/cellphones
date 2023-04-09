// import { logOut } from "../../api/auth";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onHandleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/signin");
  };
  return (
    <>
      <header className="bg-[#00B0D7] fixed w-screen ">
        <div className="flex mx-auto  w-full ">
          <img className="w-1/12 ml-[5%]" src="/logo-cellphoneS.png" alt="" />

          <input
            type="text"
            className="w-4/12 p-1 m-auto rounded-xl pl-4"
            placeholder="Tìm kiếm"
          />
          <span className="m-auto text-white font-bold">
            Xin chào Nguyễn Quang Huy
          </span>
          <button
            className="m-auto font-bold text-white"
            onClick={() => onHandleLogout()}
          >
            Đăng xuất
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
