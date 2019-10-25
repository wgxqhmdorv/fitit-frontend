import ItemList from "./itemList";
import Form from "./form";
import Category from "./category";

const List = () => (
  <div>
    <Form />
    <Category />
    <ItemList />

    <style jsx>{`
      div {
        padding: 0.5rem;
      }

      @media (min-width: 1024px) {
        div {
          padding: 2rem;
        }
      }
    `}</style>
  </div>
);

export default List;
