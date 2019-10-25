import ItemList from "./itemList";
import Form from "./form";
import Category from "./category";

const List = () => (
  <div className="p-2 lg:p-8">
    <Form />
    <Category />
    <ItemList />
  </div>
);

export default List;
