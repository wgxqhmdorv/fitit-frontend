import { connect } from "react-redux";

const reduceObjects = (array, key) =>
  array.reduce((prevValue, nextValue) => prevValue + nextValue[key], 0);

const Category = ({ items }) => {
  return (
    <div className="mb-2">
      <p className="font-bold">Summary</p>
      <div className="flex text-xs text-temp ml-2">
        <p>{reduceObjects(items, "calories")} kcal</p>
        <div className="flex w-1/2 justify-around ml-8">
          <p>{reduceObjects(items, "carbohydrates")} g</p>
          <p>{reduceObjects(items, "proteins")} g</p>
          <p>{reduceObjects(items, "fats")} g</p>
        </div>
      </div>
    </div>
  );
};

export default connect(state => state.lists)(Category);
