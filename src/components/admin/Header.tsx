const Header = () => {
  return (
    <>
      <header className="bg-[#00B0D7] fixed w-screen ">
        <div className="flex mx-auto  w-full ">
          <img className="w-1/12 ml-[5%]" src="/logo-cellphoneS.png" alt="" />
          <span className="m-auto font-bold text-xl text-white">Dashboard</span>
          <input
            type="text"
            className="w-5/12 p-1 m-auto rounded-xl pl-4"
            placeholder="Tìm kiếm"
          />
          <span className="m-auto text-white font-bold">
            Xin chào Nguyễn Quang Huy
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
