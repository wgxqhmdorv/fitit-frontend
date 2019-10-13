import { useState, useCallback, createContext, useMemo } from "react";
import ItemList from "./itemList";
import Form from "./form";
import Category from "./category";

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
        weight: Math.round(Math.random() * 50 + 50),
        calories: Math.round(Math.random() * 300 + 100),
        carbohydrates: Math.round(Math.random() * 30 + 1),
        proteins: Math.round(Math.random() * 15 + 1),
        fats: Math.round(Math.random() * 10 + 1)
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
      <Category items={items} />
      <ListApi.Provider value={getListApi}>
        <ItemList items={items} />
      </ListApi.Provider>
    </>
  );
};

export default List;
export { ListApi };
