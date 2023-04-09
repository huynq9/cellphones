import { Nav } from "../../components/client/Nav";
import { Product } from "../../components/client/Product";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOne } from "../../api/products";
import { AddProduct } from "../../Schemas/products";
import { IProducts } from "../../interface/Products";
export const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProducts[]>([]);
  const fetchProduct = async (id) => {
    const {
      data: { data },
    } = await getOne(id);
    setProduct(data);
    console.log(data);
  };
  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, []);
  return (
    <section>
      <div className="border-b-2  border-gray-400 shadow-sm">
        <Nav />
      </div>
      <div className="border-b-2 text-xl p-3  border-gray-400 shadow-sm">
        <h1 className="w-8/12 mx-auto">{product.name}</h1>
      </div>
      <div className="w-8/12 mx-auto mt-10">
        <Product data={product} />
      </div>
    </section>
  );
};
