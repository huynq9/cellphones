import { Nav } from "../../components/client/Nav";
import { Product } from "../../components/client/Product";
export const Detail = () => {
  return (
    <section>
      <div className="border-b-2  border-gray-400 shadow-sm">
        <Nav />
      </div>
      <div className="border-b-2 text-xl p-3  border-gray-400 shadow-sm">
        <h1 className="w-8/12 mx-auto">Samsung Galaxy A73 (5G) 256GB</h1>
      </div>
      <div className="w-8/12 mx-auto mt-10">
        <Product />
      </div>
    </section>
  );
};
