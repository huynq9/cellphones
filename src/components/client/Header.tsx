import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);

  const handleLogout = () => {
    // Xử lý đăng xuất
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    // Chuyển hướng đến trang đăng nhập
    navigate("/signin");
  };

  return (
    <header className="bg-[#D70018] ">
      <div className="flex mx-auto  w-8/12 ">
        <img className="w-1/12" src="/logo-cellphoneS.png" alt="" />
        <input
          type="text"
          className="w-10/12 p-1 m-auto rounded-xl pl-4"
          placeholder="Tìm kiếm"
        />
        {user ? (
          <button
            className="ml-4  text-white px-1 py-1 rounded-md"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        ) : (
          <button
            className="ml-4  text-white px-3 py- rounded-md"
            onClick={handleLogout}
          >
            Đăng nhập
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
