export const Nav = () => {
  return (
    <nav className="w-8/12 mx-auto">
      <ul className="flex">
        <li className="p-1 text-sm pr-3 pl-3 hover:text-red-800">
          <a href="">Trang chủ</a>
        </li>
        <li className="p-1 text-sm pr-3 pl-3 hover:text-red-800">
          <a href="">Điện thoại</a>
        </li>
        <li className="p-1 text-sm pr-3 pl-3 hover:text-red-800">
          {" "}
          <a href="">SamSung</a>
        </li>
        <li className="p-1 pr-3 pl-3 text-sm hover:text-red-800">
          <a href="">Samsung Galaxy A73 (5G) 256GB</a>
        </li>
      </ul>
    </nav>
  );
};
