import { LIST_ITEM_ADD, LIST_ITEM_DELETE } from "../types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  const { items } = state;
  switch (action.type) {
    case LIST_ITEM_ADD:
      return { ...state, items: items.concat(action.item) };
    case LIST_ITEM_DELETE:
      return {
        ...state,
        items: items.filter(item => item.name !== action.itemName)
      };
    default:
      return state;
  }
};
