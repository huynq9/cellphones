export const Cart = () => {
  return (
    <section className=" w-4/12 mx-auto">
      <div className="flex py-3">
        <button className="text-red-600 font-bold ">
          <a href="">
            <i className="fa-solid fa-arrow-left pr-1"></i>Trở về
          </a>
        </button>

        <span className="text-center w-4/5 text-red-600 font-bold">
          Giỏ hàng
        </span>
      </div>
      <div className="flex mx-3 shadow-xl p-3 rounded-md">
        <div className="w-2/6">
          <img src="/product3.png" alt="" />
        </div>
        <div className="w-4/6 relative">
          <div className="flex">
            <span className="">Samsung Galaxy S22-Đen</span>
            <a href="">
              <i className="fa-solid fa-xmark text-2xl  absolute right-0"></i>
            </a>
          </div>
          <div className="py-3">
            <span className="text-md text-red-600">16.090.000 ₫</span>
            <span className=" text-sm text-gray-400 px-2">21.990.000 ₫</span>
            <span className="text-white bg-red-600 rounded-md text-sm p-1">
              Giảm 27%
            </span>
          </div>
          <div>
            <label htmlFor="">Chọn số lượng:</label>
            <input
              type="number"
              className="border border-gray-400 rounded-md w-[20%] mx-4 pl-[2%]"
            />
          </div>
          <div className="bg-gray-400 rounded-lg py-[2%] my-[2%]">
            <span className="ml-[1%]">- Chương trình khuyến mại:</span>
            <div className="ml-[7%]">
              <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
              <p>
                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing
                MP3, Phúc Long, Galaxy Play)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5%]">
        <div>
          <span className="font-bold">Tổng tiền tạm tính:</span>
          <span className="float-right text-red-600 font-bold">
            17.820.000 ₫
          </span>
        </div>
        <button className="text-center bg-red-600 w-full py-[2%] my-[2%] text-white font-bold rounded-md">
          Tiến hành đặt hàng
        </button>
        <button className="text-center  w-full py-[2%] text-red-600 border-2 border-red-600 font-bold rounded-md">
          Tiến hành đặt hàng
        </button>
      </div>
    </section>
  );
};
