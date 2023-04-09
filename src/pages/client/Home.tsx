import ListProducts from "../../components/client/ListProducts";
import { Slider } from "../../components/client/Slider";
import { useState, useEffect } from "react";
import { AddProduct } from "../../Schemas/products";
import { getAll } from "../../api/products";

const HomePage = () => {
  const [product, setProduct] = useState<AddProduct[]>([]);
  const fetchProduct = async () => {
    const {
      data: { data },
    } = await getAll();
    setProduct(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className=" ">
        <Slider />
      </div>
      <div className="pt-5 flex flex-wrap mt-5 gap-6 m-auto justify-evenly">
        {product.map((item, index) => (
          <ListProducts data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
