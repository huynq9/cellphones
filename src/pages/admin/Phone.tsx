export const Phone = () => {
  return (
    <section className="">
      <div className="flex justify-between mx-">
        <h1 className="text-2xl font-bold">Điện thoại</h1>
        <i className="fa-solid fa-plus fa-2xl mr-[8%] border-4 border-[#00B0D7] text-[#00B0D7] p-1 rounded-xl"></i>
      </div>
      <div className="flex ">
        <span className="font-medium my-auto p-3">Bộ lọc:</span>
        <div className="flex flex-col p-3 w-4/12">
          <span>Danh mục sản phẩm </span>
          <select name="" id="" className="border rounded-md p-2">
            <option value="">Chọn danh mục</option>
            <option value="">Điện thoại</option>
            <option value="">Laptop</option>
            <option value="">Máy tính bảng</option>
            <option value="">Âm thanh</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <table className="w-11/12">
          <thead>
            <tr className="border-t ">
              <th className="w-1/12 py-3">#</th>
              <th className="w-2/12">Tên sản phẩm</th>
              <th className="w-2/12">Thành tiền</th>
              <th className="w-3/12">Mô tả</th>
              <th className="w-2/12">Ẩn/hiện</th>
              <th className="w-2/12">Thao tác </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-t">
              <td className="text-center py-3">1</td>
              <td className="text-center">Iphone</td>
              <td className="text-center">10.000.000đ</td>
              <td>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, </td>
              <td className="text-center mx-auto">checkbox</td>
              <td className="text-center">
                <a href="/admin/edit">
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
