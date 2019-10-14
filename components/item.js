import { connect } from "react-redux";
import actions from "../redux/actions";

const Item = ({ item, deleteItem }) => {
  return (
    <div className="mb-2 bg-gray-100 p-2 rounded-lg">
      <div className="flex justify-between">
        <p className="capitalize">{item.name}</p>
        <button onClick={() => deleteItem(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black fill-current"
          >
            <path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
          </svg>
        </button>
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

export default connect(
  null,
  actions
)(Item);
