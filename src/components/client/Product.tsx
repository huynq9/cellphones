import { IProducts } from "../../interface/Products";
type Props = {
  data: IProducts;
};
export const Product = ({ data }: Props) => {
  return (
    <section>
      <div className="flex">
        <div className="px-10">
          <img
            src={data.image ? data.image : `/product2.png`}
            className="w-[360px] h-[360px]"
            alt=""
          />
        </div>
        <div className="w-7/12">
          <div>
            <span className="text-red-500 text-2xl">{data.price} Đ</span>
            <span className="text-gray-500 pl-4">{data.original_price} ₫</span>
          </div>

          <span className="pt-10">
            Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng
            cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
            Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm
            giác sang trọng và tinh tế.
          </span>
        </div>
      </div>
      <div className="flex mt-10">
        <div className=" flex gap-4 w-4/12">
          <button className="border p-0 leading-none w-[17%]  border-gray-400 px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:border-red-500">
            <i className="fa fa-star"></i>
            <br />
            <span className="text-[8px] ">Tình năng nổi bật</span>
          </button>
          <a className="border p-1 leading-none w-[17%]  border-gray-400 rounded-lg transition-colors duration-300 focus:outline-none focus:border-red-500">
            <img src="/product2.png" alt="" className="w-full" />
          </a>
          <a className="border p-1 leading-none w-[17%]  border-gray-400 rounded-lg transition-colors duration-300 focus:outline-none focus:border-red-500">
            <img src="/product2.png" alt="" className="w-full" />
          </a>
          <a className="border p-1 leading-none w-[17%]  border-gray-400 rounded-lg transition-colors duration-300 focus:outline-none focus:border-red-500">
            <img src="/product2.png" alt="" className="w-full" />
          </a>
          <a className="border p-1 leading-none w-[17%]  border-gray-400 rounded-lg transition-colors duration-300 focus:outline-none focus:border-red-500">
            <img src="/product2.png" alt="" className="w-full" />
          </a>
        </div>
        <div className="w-7/12 my-auto  ml-6 flex">
          <button className="bg-red-500 px-20 py-2 text-white rounded-md ">
            Mua ngay
          </button>
          <button className=" absolute w-1/12 flex ml-[13%]">
            <i className="text-red-500 fa-solid fa-cart-shopping border-2 relative border-red-500 rounded-md p-3 "></i>
            <span className="relavtive ">Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
      <div className="mx-auto">
        <div className="mt-5 bg-gray-200 rounded-md">
          <h1 className="text-red-500 text-center py-3">ĐẶC ĐIỂM NỔI BẬT</h1>
          <div className="mx-5">
            {/* <p className="py-2">
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </p>
            <p className="py-2">
              Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch,
              độ phân giải Full HD+, 120Hz mượt mà
            </p>
            <p className="py-2">
              Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon
              778G, RAM lên đến 8 GB
            </p>
            <p className="py-2">
              Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
              hỗ trợ sạc nhanh 25 W
            </p> */}
            {data.properties}
          </div>
        </div>
        {/* <p className="py-5">
          Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là
          fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho
          ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình,
          trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so
          với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có
          nên mua không? Tìm hiểu ngay nhé!
        </p>
        <h1 className="pt-5 pb-3 text-2xl text-[#0A263C]">
          Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
        </h1>
        <p>
          Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
          đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
          biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc
        </p>
        <h1 className="pt-5 pb-3 text-2xl text-[#0A263C]">
          Thiết kế sang trọng, màn hình Super AMOLED
        </h1>
        <p className="pb-3">
          Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm
          đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một
          chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
        </p>
        <p className="pb-3">
          Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng
          mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo
          chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.
        </p>
        <p className="pb-3">
          Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ
          nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di
          chuyển dễ dàng.
        </p> */}
        {data.desc}
        <div className="flex  justify-center items-center">
          <button className="border-2 border-black px-32 py-1 text-black  rounded-xl">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};
