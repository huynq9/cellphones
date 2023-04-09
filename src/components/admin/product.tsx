import { Link } from "react-router-dom";
import { IProducts } from "../../interface/Products";
import { AddProduct } from "../../Schemas/products";
type Props = {
  data: AddProduct;
  index: number;
  onHandleClick: any;
};
export const Product = ({ data, index, onHandleClick }: Props) => {
  return (
    <tr className=" border-t">
      <td className="text-center py-3">{index}</td>
      <td className="text-center">{data.name}</td>
      <td className="text-center">{data.price}</td>
      <td>{data.desc} </td>
      <td className="text-center mx-auto">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
      <td className="text-center ">
        <button className=" mx-1" onClick={onHandleClick}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <Link to={`/admin/edit/${data._id}`} className=" mx-1">
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
      </td>
    </tr>
  );
};
