import { memo, useContext } from "react";
import X from "./xIcon";
import { ListApi } from "./list";

const Item = ({ item }) => {
  const api = useContext(ListApi);
  return (
    <div className="mb-2 bg-gray-100 p-2 rounded-lg">
      <div className="flex justify-between">
        <p className="capitalize">{item.name}</p>
        <X handleOnClick={() => api.removeItem(item)} />
      </div>
      <div className="text-xs text-temp ">
        <p>{item.weight} g</p>
        <div className="flex">
          <p>{item.calories} kcal</p>
          <div className="flex w-1/2 justify-around ml-8">
            <p>{item.carbohydrates} g</p>
            <p>{item.proteins} g</p>
            <p>{item.fats} g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
