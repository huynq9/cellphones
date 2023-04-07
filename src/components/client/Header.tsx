const Header = () => {
  return (
    <>
      <header className="bg-[#D70018] ">
        <div className="flex mx-auto  w-8/12 ">
          <img className="w-1/12" src="/logo-cellphoneS.png" alt="" />
          <input
            type="text"
            className="w-10/12 p-1 m-auto rounded-xl pl-4"
            placeholder="Tìm kiếm"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
