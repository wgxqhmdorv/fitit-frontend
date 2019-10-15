import { connect } from "react-redux";

const reduceObjects = (array, key) =>
  array.reduce((prevValue, nextValue) => prevValue + nextValue[key], 0);

const Category = ({ list }) => {
  return (
    <div className="mb-2">
      <p className="font-bold">Summary</p>
      <div className="flex text-xs text-temp ml-2">
        <p>{reduceObjects(list, "calories")} kcal</p>
        <div className="flex w-1/2 justify-around ml-8">
          <p>{reduceObjects(list, "carbohydrates")} g</p>
          <p>{reduceObjects(list, "proteins")} g</p>
          <p>{reduceObjects(list, "fats")} g</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Category);
