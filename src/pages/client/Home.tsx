import ListProducts from "../../components/client/ListProducts";
import Slider from "../../components/client/Slider";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className=" ">
        <Slider />
      </div>
      <div className="pt-5">
        <ListProducts />
      </div>
    </div>
  );
};
export default HomePage;
