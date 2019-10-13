import { useState } from "react";
import itemList from "./itemList"

const List = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    setItems(items.concat(input));
    setInput("");
    event.preventDefault();
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="flex items-center text-2xl">
        <form onSubmit={handleSubmit} className="w-full">
          <label htmlFor="items" className="block w-3/4 text-center uppercase">
            Item
          </label>

          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Banana"
            className="w-3/4 p-2"
          />
          <button type="submit" className="w-1/4 bg-primary p-2">
            Add
          </button>
        </form>
      </div>
      {items.map(item => (
        <div className="w-3/2 text-center">{item}</div>
      ))}
    </>
  );
};

export default List;
