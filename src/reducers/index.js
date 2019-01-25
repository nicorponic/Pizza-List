import { combineReducers } from "redux";
import pizzas from "./reducer";
import selectedPizza from "./selected-pizza";
//import addPizza from "./add-pizza"

export default combineReducers({
  pizzas,
  selectedPizza
  //addPizza
});
