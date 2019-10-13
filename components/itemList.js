import { memo } from "react";
import Item from "./item";

const ItemList = ({ items }) => (
  <div>
    {items.map(item => (
      <Item item={item} />
    ))}
  </div>
);

export default memo(ItemList);
