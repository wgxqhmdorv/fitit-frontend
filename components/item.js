import { connect } from "react-redux";
import { deleteItem } from "../redux/features/listSlice";

const Item = ({ item, deleteItem }) => {
  return (
    <div className="container">
      <div className="flex">
        <p>{item.name}</p>
        <button onClick={() => deleteItem(item)}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
          </svg>
        </button>
      </div>
      <div className="minorText">
        <p>{item.weight} g</p>
        <div className="grid">
          <p>{item.calories} kcal</p>
          <p>{item.carbohydrates} g</p>
          <p>{item.proteins} g</p>
          <p>{item.fats} g</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          margin-bottom: 0.5rem;
          background: white;
          padding: 0.5rem;
        }
        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: black;
          fill: currentColor;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }

        .minorText {
          font-size: 0.75rem;
          color: #a9a9a9;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }
      `}</style>
    </div>
  );
};

const mapDispatchToProps = { deleteItem };

export default connect(
  null,
  mapDispatchToProps
)(Item);
