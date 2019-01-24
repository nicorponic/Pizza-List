const reducer = (state = [], action = {}) => {
  switch (action.type) {
    default:
      const initialState = [
        {
          id: 1,
          name: "Pizza Margarita",
          description: "Minimalism is key!",
          ingredients: ["tomato", "mozarella", "basil"]
        },
        {
          id: 2,
          name: "Pizza Napoletana",
          description: "The mafia knows whats best for you",
          ingredients: ["tomato", "mozarella"]
        },
        {
          id: 3,
          name: "Pizza Bianca",
          description: "Did somebody say oil?",
          ingredients: ["olive oil", "salt", "rosemary"]
        }
      ];
      return initialState;
  }
};

export default reducer;
