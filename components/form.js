import { connect } from "react-redux";
import { useState } from "react";
import { addItem } from "../redux/features/listSlice";

const Form = ({ addItem }) => {
  const [input, setInput] = useState("");

  const handleOnClick = event => {
    event.preventDefault();
    if (input !== "") {
      addItem({
        id: Math.round(Math.random() * 10000),
        name: input,
        weight: Math.round(Math.random() * 50 + 50),
        calories: Math.round(Math.random() * 300 + 100),
        carbohydrates: Math.round(Math.random() * 30 + 1),
        proteins: Math.round(Math.random() * 15 + 1),
        fats: Math.round(Math.random() * 10 + 1)
      });
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleOnClick}
      className="w-full border-b-2 border-green-300 pb-2 mb-2"
    >
      <div className="flex justify-between">
        <input
          type="text"
          value={input}
          onChange={() => setInput(event.target.value)}
          placeholder="Search for your product"
          className="w-3/4 p-2 flex-grow text-gray-700"
        />
        <button type="submit" className="block bg-primary py-2 px-4 mx-4">
          Add
        </button>
      </div>
    </form>
  );
};

const mapDispatch = { addItem };

export default connect(
  null,
  mapDispatch
)(Form);
