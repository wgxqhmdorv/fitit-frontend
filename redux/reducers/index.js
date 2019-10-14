import { combineReducers } from "redux";
import listReducer from "./listReducers";

const rootReducer = combineReducers({
  lists: listReducer
});

export default rootReducer;
