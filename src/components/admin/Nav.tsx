import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="flex flex-col mt-[5%] px-[4%] shadow-xl h-screen fixed">
      <Link
        to="/admin"
        className="p-3  mt-[20%]  hover:bg-[#00B0D7] hover:text-white rounded-lg my-[3%]"
      >
        <i className="fa-solid fa-mobile fa-xl mx-3"></i>
        Điện thoại
      </Link>
      <Link
        to=""
        className="p-3  hover:bg-[#00B0D7] hover:text-white rounded-lg my-[3%]"
      >
        <i className="fa-solid fa-laptop fa-xl mx-3"></i>
        Laptop
      </Link>
      <Link
        className="p-3 hover:bg-[#00B0D7] hover:text-white rounded-lg my-[3%]"
        to=""
      >
        <i className="fa-solid fa-tablet-button fa-xl mx-3"></i>Máy tính bảng
      </Link>
      <Link
        to=""
        className="p-3 hover:bg-[#00B0D7] hover:text-white rounded-lg my-[3%]"
      >
        <i className="fa-solid fa-headphones fa-xl mx-3"></i>Âm thanh
      </Link>
      <Link
        to=""
        className="p-3 hover:bg-[#00B0D7] hover:text-white rounded-lg my-[3%]"
      >
        <i className="fa-solid fa-user fa-xl mx-3"></i>Người dùng
      </Link>
    </nav>
  );
};
