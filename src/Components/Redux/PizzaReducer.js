const initState = []

export const pizzaReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_PIZZAS":
      return [...action.payload]

    default:
      return state;
  }
};