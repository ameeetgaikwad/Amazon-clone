export const intialState = {
  basket: ["as"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic
      return { state };

    case "REMOVE_FROM_BASKET":
      //Logic
      return { state };

    default:
      return state;
  }
};

export default reducer;
