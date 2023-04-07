import { MdOutlineAddBox } from "react-icons/md";

export const Add = () => {
  return (
    <form>
      <div className="flex justify-between  ">
        <h1 className="text-2xl font-bold">Thêm sản phẩm</h1>
      </div>
      <div className="flex relative">
        <div className="w-3/12 shadow-md absolute">
          <div className="mx-auto my-[15%]">
            <label htmlFor="drop" className=" text-center block cursor-pointer">
              <MdOutlineAddBox size={24} className="mx-auto" />
              Thêm ảnh
              <input type="file" hidden name="" id="drop" />
            </label>
          </div>
          <div className=" border rounded-xl">
            <input
              type="text"
              className="w-full pb-20 pt-2 pl-2"
              defaultValue="Mô tả ngắn: "
            />
          </div>
        </div>
        <div className="w-8/12 mx-auto absolute right-14">
          <div className="w-full border-b pb-4 px-4 font-medium">
            <span className="">Thông tin sản phẩm</span>
          </div>
          <div className="p-3">
            <span className="">Tên sản phẩm</span>
            <input type="text" className="w-full p-2 mt-2 border rounded-md" />
          </div>
          <div className="flex gap-10 p-3">
            <div className="w-[49%]">
              <span>Giá gốc</span>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded-md"
              />
            </div>
            <div className="w-[49%]">
              <span>Giá khuyến mại</span>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col p-3 w-[50%]">
            <span>Danh mục sản phẩm </span>
            <select name="" id="" className="border rounded-md py-2">
              <option value="">Chọn danh mục</option>
              <option value="">Điện thoại</option>
              <option value="">Laptop</option>
              <option value="">Máy tính bảng</option>
              <option value="">Âm thanh</option>
            </select>
          </div>
          <div className="p-3">
            <label htmlFor="" className="">
              Đặc điểm nổi bật
            </label>
            <input type="text" className="w-full border rounded-md pb-20" />
          </div>
          <div className="p-3">
            <label htmlFor="" className="">
              Mô tả dài
            </label>
            <input type="text" className="w-full border rounded-md pb-20" />
          </div>
          <button className="p-3 ml-3 my-5 bg-[#00B0D7] rounded-lg text-white">
            Thêm mới
          </button>
        </div>
      </div>
    </form>
  );
};
