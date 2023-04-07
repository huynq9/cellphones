import { Link } from "react-router-dom";

const ListProducts = () => {
  return (
    <Link to="" className="">
      <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
      <div className="flex flex-wrap mt-5 gap-6 m-auto">
        <div className="product w-[1/7]">
          <div>
            <img src="/product1.png" alt="" className="mx-auto" />
          </div>
          <div className="">
            <p className="text-md mt-2">iPhone 11 64GB I Chính hãng VN/A</p>
            <div className="flex gap-1 mt-2">
              <span className="text-[#D70018] text-xl">10.790.000 ₫</span>
              <span className="text-sm py-2">18.000.000 ₫</span>
            </div>
            <div className="mt-2">
              <i className="fa-solid fa-star fa-bounce"></i>
              <i className="fa-solid fa-star fa-bounce"></i>
              <i className="fa-solid fa-star fa-bounce"></i>
              <i className="fa-solid fa-star fa-bounce"></i>
              <i className="fa-solid fa-star fa-bounce"></i>
              <span>72 đánh giá</span>
            </div>
          </div>
        </div>
      </div>
      .
    </Link>
  );
};
export default ListProducts;
