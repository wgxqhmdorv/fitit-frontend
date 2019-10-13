const Category = ({ items }) => {
  return (
    <div className="mb-2">
      <p className="font-bold">Summary</p>
      <div className="text-xs text-temp ml-2">
        <div className="flex">
          <p>
            {items.reduce(
              (prevValue, nextValue) => prevValue + nextValue.calories,
              0
            )}{" "}
            kcal
          </p>
          <div className="flex w-1/2 justify-around ml-8">
            <p>
              {items.reduce(
                (prevValue, nextValue) => prevValue + nextValue.carbohydrates,
                0
              )}{" "}
              g
            </p>
            <p>
              {items.reduce(
                (prevValue, nextValue) => prevValue + nextValue.proteins,
                0
              )}{" "}
              g
            </p>
            <p>
              {items.reduce(
                (prevValue, nextValue) => prevValue + nextValue.fats,
                0
              )}{" "}
              g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
