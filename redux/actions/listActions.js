import { LIST_ITEM_ADD, LIST_ITEM_DELETE } from "../types";

const addItem = item => ({
  type: LIST_ITEM_ADD,
  item
});

const deleteItem = item => ({
  type: LIST_ITEM_DELETE,
  itemName: item.name
});

export default { addItem, deleteItem };
