const reducer = (state = [], action = {}) => {
    console.log(state, action.type, "ADD-PIZZA")
  switch (action.type) {
    case "ADD_PIZZA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
