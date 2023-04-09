import { Link } from "react-router-dom";
import { IProducts } from "../../interface/Products";
import { AddProduct } from "../../Schemas/products";
type Props = {
  data: IProducts;
};
const ListProducts = ({ data }: Props) => {
  return (
    <Link to={`/detail/${data._id}`} className="">
      {/* <div className="flex flex-wrap mt-5 gap-6 m-auto"> */}
      <div className="product w-[250px] hover:shadow-xl p-3 hover:scale-110 transform transition duration-500">
        <div className=" ">
          <img
            style={{ objectFit: "cover" }}
            src={data.image ? data.image : `/product1.png`}
            alt=""
            className="mx-auto block w-[200px] h-[200px] hover:scale-110 transform transition duration-500"
          />
        </div>
        <div className="">
          <p className="text-md mt-2">{data.name}</p>
          <div className="flex gap-1 mt-2">
            <span className="text-[#D70018] text-xl">{data.price} VND</span>
            <span className="text-sm py-2">{data.original_price} VND</span>
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
      {/* </div> */}
    </Link>
  );
};
export default ListProducts;
