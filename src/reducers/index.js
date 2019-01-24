import { combineReducers } from "redux";
import pizzas from "./reducer";
import selectedPizza from "./selected-pizza";

export default combineReducers({
  pizzas,
  selectedPizza
});
