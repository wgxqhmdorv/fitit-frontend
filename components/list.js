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
      setItems(items.concat(input));
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
