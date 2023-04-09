import ListProducts from "../../components/client/ListProducts";
import { Slider } from "../../components/client/Slider";
import { useState, useEffect } from "react";
import { AddProduct } from "../../Schemas/products";
import { getAll } from "../../api/products";

const HomePage = () => {
  const [product, setProduct] = useState<AddProduct[]>([]);
  const [metaData, setMetaData] = useState<any>({});
  const [curentPage, setCurrentPage] = useState<number>(1);
  const fetchProduct = async () => {
    const {
      data: {
        data: { products, meta },
      },
    } = await getAll(curentPage, 7);
    setProduct((prev) => [...prev, ...products]);
    setMetaData(meta);
    console.log(meta);
  };
  const handleNextPage = () => {
    if (metaData?.totalPage !== curentPage) {
      setCurrentPage(curentPage + 1);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [curentPage]);

  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className=" ">
        <Slider />
      </div>
      <div className="pt-5  mt-5  mx-auto ">
        <h1 className="text-3xl font-bold my-4">Sản phẩm nổi bật</h1>
        <div className="mx-auto flex gap-7 flex-wrap ">
          {product.map((item, index) => (
            <ListProducts className="" data={item} key={index} />
          ))}
        </div>
      </div>
      {metaData?.totalPage !== curentPage && (
        <button
          onClick={handleNextPage}
          className="border p-3 mt-3 bg-red-600 text-white rounded-xl hover:bg-yellow-500 hover:text-black"
        >
          Xem Thêm
        </button>
      )}
    </div>
  );
};
export default HomePage;
