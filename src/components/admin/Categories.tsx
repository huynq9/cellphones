import { ICategory } from "../../interface/Category";

type Props = {
  data: ICategory;
  index: Number;
};
export const Categories = ({ data, index }: Props) => {
  return <option value={data._id}>{data.name}</option>;
};
