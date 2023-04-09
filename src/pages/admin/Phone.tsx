import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteProduct, getAll } from "../../api/products";
import { IProducts } from "../../interface/Products";
import { Product } from "../../components/admin/product";
import { boolean } from "yup";

export const Phone = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [curentPage, setCurrentPage] = useState<number>(1);
  const [metaData, setMetaData] = useState<any>({});
  const fetchProducts = async () => {
    const {
      data: {
        data: { products, meta },
      },
    } = await getAll(curentPage, 10);
    setMetaData(meta);
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [curentPage]);

  const onDelete = async (id: string) => {
    try {
      const result = confirm("Bạn có muốn xóa không ?");
      if (result === true) {
        deleteProduct(id);
        setProducts((prevProducts) =>
          prevProducts.filter((item) => item._id !== id)
        );
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNextPage = (type: string) => {
    if (type === "nextPage") {
      if (metaData?.totalPage !== curentPage) {
        setCurrentPage(curentPage + 1);
      }
    } else {
      if (metaData?.totalPage === curentPage || curentPage > 1) {
        setCurrentPage(curentPage - 1);
      }
    }
  };

  return (
    <section className="">
      <div className="flex justify-between mx-">
        <h1 className="text-2xl font-bold">Điện thoại</h1>
        <Link to="/admin/add" className="mr-[8%]">
          <i className="fa-solid fa-plus fa-2xl mr-[8%] border-4 border-[#00B0D7] text-[#00B0D7] p-1 rounded-xl"></i>
        </Link>
      </div>
      {/* <div className="flex ">
        <span className="font-medium my-auto p-3">Bộ lọc:</span>
        <div className="flex flex-col p-3 w-4/12">
          <span>Danh mục sản phẩm </span>
          <select name="" id="" className="border rounded-md p-2"></select>
        </div>
      </div> */}
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
            {products.map((item, index) => (
              <Product
                data={item}
                index={index + 1}
                onHandleClick={() => onDelete(item._id)}
                key={index}
              />
            ))}
          </tbody>
        </table>
        {metaData?.totalPage !== curentPage && (
          <button onClick={() => handleNextPage("nextPage")}>Xem Thêm</button>
        )}
        {(curentPage > 1 || curentPage === metaData.total) && (
          <button onClick={() => handleNextPage("cc")}>Quay lại</button>
        )}
      </div>
    </section>
  );
};
