import { useState, useCallback, createContext, useMemo } from "react";
import ItemList from "./itemList";
import Form from "./form";

const ListApi = createContext(null);

const List = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const changeInput = event => {
    setInput(event.target.value);
  };

  const addItem = event => {
    if (input != "") {
      const newItem = {
        name: input,
        weight: (Math.random() * 50 + 50).toFixed(2),
        calories: (Math.random() * 300 + 100).toFixed(2),
        carbohydrates: (Math.random() * 30 + 1).toFixed(2),
        proteins: (Math.random() * 15 + 1).toFixed(2),
        fats: (Math.random() * 10 + 1).toFixed(2)
      };
      setItems(items.concat(newItem));
      setInput("");
    }
    event.preventDefault();
  };

  const removeItem = useCallback(itemName => {
    setItems(prevItems => prevItems.filter(item => item !== itemName));
  }, []);

  const getListApi = useMemo(() => ({ removeItem }), []);

  return (
    <>
      <Form input={input} changeInput={changeInput} addItem={addItem} />
      <ListApi.Provider value={getListApi}>
        <ItemList items={items} />
      </ListApi.Provider>
    </>
  );
};

export default List;
export { ListApi };
