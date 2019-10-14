import Item from "./item";
import { connect } from "react-redux";

const ItemList = ({ items }) => (
  <div>
    {items.map(item => (
      <Item item={item} key={item.id} />
    ))}
  </div>
);

export default connect(state => state.lists)(ItemList);
