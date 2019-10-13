import { memo, useContext } from "react";
import X from "./xIcon";
import { ListApi } from "./list";

const Item = ({ item }) => {
  const api = useContext(ListApi);
  return (
    <div className="mb-2 bg-gray-100 p-2 rounded-lg">
      <div className="flex justify-between">
        <p className="capitalize">{item}</p>
        <X handleOnClick={() => api.removeItem(item)} />
      </div>
      <p className="text-temp">{Math.floor(Math.random() * 50 + 50)} g</p>
      <p className="text-temp">{Math.floor(Math.random() * 300 + 100)} kcal</p>
    </div>
  );
};

export default memo(Item);
